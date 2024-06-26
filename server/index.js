const express = require('express');
const { downHandler } = require('./down.js');
const { upHandler } = require('./up.js');
const https = require('https');
const http = require('http');
const fs = require('fs');

const { exec } = require('child_process');

const app = express();

function addTiming(header, start) {
    const diff = process.hrtime(start);
    const time = diff[0] * 1e3 + diff[1] * 1e-6;
    header.set('Server-Timing', `cfRequestDuration;dur=${time.toFixed(2)}`);
}

app.get('/__down', (req, res) => {
    const start = process.hrtime();
    downHandler(req, res)
        .then(response => {
            addTiming(response.headers, start);
            res.writeHead(response.status, response.headers.headers);
            res.end(response.body);
        })
        .catch(error => {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        });
});

app.post('/__up', (req, res) => {
    const start = process.hrtime();
    upHandler(req, res)
        .then(response => {
            addTiming(response.headers, start);
            res.writeHead(response.status, response.headers.headers);
            res.end(response.body);
        })
        .catch(error => {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        });
});

// Add api to get final n lines of /var/log/syslog by /__logs?n=1000
app.get('/__logs', (req, res) => {
    const n = req.query.n || 100;
    const command = `tail -n ${n} /log/syslog`;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(stdout);
    });
});

const options = {
    key: fs.readFileSync('./private.key'),
    cert: fs.readFileSync('./certificate.crt')
};

const server = https.createServer(options, app);
server.listen(443, () => {
    console.log('Server is running on https://localhost');
});
const serverDev = http.createServer(options, app);
serverDev.listen(80, () => {
    console.log('Server is running on http://localhost');
});

module.exports = app;

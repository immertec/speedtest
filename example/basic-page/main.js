
import SpeedTest from './index.js';


const controlEl = document.getElementById('controls');
const resEl = document.getElementById('result');
const REL_API_URL = 'http://34.74.175.135';
const TURN_URL = '34.74.175.135:8086';
const engine = new SpeedTest({
  autoStart: true,
  downloadApiUrl: `${REL_API_URL}/__down`,
  uploadApiUrl: `${REL_API_URL}/__up`,
  logMeasurementApiUrl: null,
  logAimApiUrl: null,//'https://aim.cloudflare.com/__log',
  turnServerUri: TURN_URL,
  turnServerCredsApiUrl: null,//`${REL_API_URL}/turn-creds`,
  turnServerUser: 'test',
  turnServerPass: 'test',
  rpkiInvalidHost: null,//'invalid.rpki.cloudflare.com',
  cfTraceUrl: null,//`${REL_API_URL}/cdn-cgi/trace`,
  includeCredentials: false,
});
engine.onRunningChange = running => controlEl.textContent = running ? 'Running...' : 'Finished!';
engine.onResultsChange = ({ type }) => {
  !engine.isFinished && setResult(engine.results.raw);
  console.log(type);
};
engine.onFinish = results => {
  setResult(results.getSummary());
  console.log(results.getSummary());
  console.log(results.getScores());
};

engine.onError = (e) => console.log(e);

function setResult(obj) {
  const resTxt = document.createElement('pre');
  resTxt.textContent = JSON.stringify(obj, null, 2);
  resEl.textContent = '';
  resEl.appendChild(resTxt);
}
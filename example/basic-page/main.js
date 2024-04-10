import SpeedTest from './index.js';

const urlParams = new URLSearchParams(window.location.search);
const upDownUrl = urlParams.get('url');
const turnUrl = urlParams.get('turnUrl');
const user = urlParams.get('user');
const password = urlParams.get('password');
console.log('upDownUrl', upDownUrl);
console.log('turnUrl', turnUrl);

const custom = {
  autoStart: true,
  downloadApiUrl: `${upDownUrl}/__down`,
  uploadApiUrl: `${upDownUrl}/__up`,
  logMeasurementApiUrl: null,
  logAimApiUrl: null,
  turnServerUri: turnUrl ? turnUrl : undefined,
  turnServerCredsApiUrl: null,
  turnServerUser: user ? user : 'user',
  turnServerPass: password ? password : 'password',
  rpkiInvalidHost: null,
  cfTraceUrl: null,
  includeCredentials: false,
  // Measurements configuration took from default with reduced upload
  measurements: [
    { type: 'latency', numPackets: 1 }, // initial ttfb estimation
    { type: 'download', bytes: 1e5, count: 1, bypassMinDuration: true }, // initial download estimation
    { type: 'latency', numPackets: 20 },
    { type: 'download', bytes: 1e5, count: 9 },
    { type: 'download', bytes: 1e6, count: 8 },
    { type: 'upload', bytes: 1e3, count: 8 },
    {
      type: 'packetLoss',
      numPackets: 1e3,
      batchSize: 10,
      batchWaitTime: 10, // ms (in between batches)
      responsesWaitTime: 3000 // ms (silent time after last sent msg)
    },
    //{ type: 'upload', bytes: 1e6, count: 6 },
    { type: 'download', bytes: 1e7, count: 6 },
    //{ type: 'upload', bytes: 1e7, count: 4 },
    { type: 'download', bytes: 2.5e7, count: 4 },
    //{ type: 'upload', bytes: 2.5e7, count: 4 },
    { type: 'download', bytes: 1e8, count: 3 },
    // { type: 'upload', bytes: 5e7, count: 3 },
    { type: 'download', bytes: 2.5e8, count: 2 }
  ]
};

const engine = new SpeedTest(upDownUrl && turnUrl ? custom : { autoStart: true });

engine.onResultsChange = ({ type }) => {
  if (!engine.isFinished) {
    if (typeof Android !== 'undefined' && typeof Android.onResultsChange === 'function') {
      Android.onResultsChange(engine.results.raw);
    }
    onChange(engine.results);
  }
};

engine.onFinish = results => {
  onChange(engine.results);
  if (typeof Android !== 'undefined') {
    if (typeof Android.onFinished === 'function') {
      let sum = JSON.stringify(results.getSummary());
      Android.onFinished(sum);
    }
    if (typeof Android.onScore === 'function') {
      let score = results.getScores();
      Android.onScore(JSON.stringify(score));
    }
  }
};

engine.onError = e => {
  console.log(e);
  if (typeof Android !== 'undefined' && typeof Android.onError === 'function') {
    Android.onError(e);
  }
};

function onChange(obj) {
  if (typeof Android !== 'undefined') {
    if (typeof Android.onDownBandwidth === 'function') {
      Android.onDownBandwidth(obj.getDownloadBandwidth(), obj.getDownloadBandwidthPoints());
    }
    if (typeof Android.onDownJitter === 'function') {
      Android.onDownJitter(obj.getDownLoadedJitter(), obj.getDownLoadedJitter());
    }
    if (typeof Android.onPacketLoss === 'function') {
      Android.onPacketLoss(obj.getPacketLoss(), obj.getPacketLossDetails());
    }
    if (typeof Android.onDownLatency === 'function') {
      Android.onDownLatency(obj.getDownLoadedLatency(), obj.getDownLoadedLatencyPoints());
    }
  }
}

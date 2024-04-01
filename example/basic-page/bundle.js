/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoggingMeasurementEngine)
/* harmony export */ });
/* harmony import */ var _lodash_memoize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _d3_scale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);
      var desc;
      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }
      desc = Object.getOwnPropertyDescriptor(receiver, property);
      if (desc) {
        if (!desc.writable) {
          return false;
        }
        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }
      return true;
    };
  }
  return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);
  if (!s && isStrict) {
    throw new TypeError('failed to set property');
  }
  return value;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}
var REL_API_URL = 'https://speed.cloudflare.com';
var defaultConfig = {
  // Engine
  autoStart: true,
  // APIs
  downloadApiUrl: "".concat(REL_API_URL, "/__down"),
  uploadApiUrl: "".concat(REL_API_URL, "/__up"),
  logMeasurementApiUrl: null,
  logAimApiUrl: 'https://aim.cloudflare.com/__log',
  turnServerUri: 'turn.speed.cloudflare.com:50000',
  turnServerCredsApiUrl: "".concat(REL_API_URL, "/turn-creds"),
  turnServerUser: null,
  turnServerPass: null,
  rpkiInvalidHost: 'invalid.rpki.cloudflare.com',
  cfTraceUrl: "".concat(REL_API_URL, "/cdn-cgi/trace"),
  includeCredentials: false,
  // Measurements
  measurements: [{
    type: 'latency',
    numPackets: 1
  },
  // initial ttfb estimation
  {
    type: 'download',
    bytes: 1e5,
    count: 1,
    bypassMinDuration: true
  },
  // initial download estimation
  {
    type: 'latency',
    numPackets: 20
  }, {
    type: 'download',
    bytes: 1e5,
    count: 9
  }, {
    type: 'download',
    bytes: 1e6,
    count: 8
  }, {
    type: 'upload',
    bytes: 1e5,
    count: 8
  }, {
    type: 'packetLoss',
    numPackets: 1e3,
    batchSize: 10,
    batchWaitTime: 10,
    // ms (in between batches)
    responsesWaitTime: 3000 // ms (silent time after last sent msg)
  }, {
    type: 'upload',
    bytes: 1e6,
    count: 6
  }, {
    type: 'download',
    bytes: 1e7,
    count: 6
  }, {
    type: 'upload',
    bytes: 1e7,
    count: 4
  }, {
    type: 'download',
    bytes: 2.5e7,
    count: 4
  }, {
    type: 'upload',
    bytes: 2.5e7,
    count: 4
  }, {
    type: 'download',
    bytes: 1e8,
    count: 3
  }, {
    type: 'upload',
    bytes: 5e7,
    count: 3
  }, {
    type: 'download',
    bytes: 2.5e8,
    count: 2
  }],
  measureDownloadLoadedLatency: true,
  measureUploadLoadedLatency: true,
  loadedLatencyThrottle: 400,
  // ms in between loaded latency requests
  bandwidthFinishRequestDuration: 1000,
  // download/upload duration (ms) to reach for stopping further measurements
  estimatedServerTime: 10,
  // ms to discount from latency calculation (if not present in response headers)

  // Result interpretation
  latencyPercentile: 0.5,
  // Percentile used to calculate latency from a set of measurements
  bandwidthPercentile: 0.9,
  // Percentile used to calculate bandwidth from a set of measurements
  bandwidthMinRequestDuration: 10,
  // minimum duration (ms) to consider a measurement good enough to use in bandwidth calculation
  loadedRequestMinDuration: 250,
  // minimum duration (ms) of a request to consider it to be loading the connection
  loadedLatencyMaxPoints: 20 // number of data points to keep for loaded latency
};
var internalConfig = {
  // AIM
  aimMeasurementScoring: {
    packetLoss: (0,_d3_scale_js__WEBPACK_IMPORTED_MODULE_0__.scaleThreshold)([0.01, 0.05, 0.25, 0.5], [10, 5, 0, -10, -20]),
    latency: (0,_d3_scale_js__WEBPACK_IMPORTED_MODULE_0__.scaleThreshold)([10, 20, 50, 100, 500], [20, 10, 5, 0, -10, -20]),
    loadedLatencyIncrease: (0,_d3_scale_js__WEBPACK_IMPORTED_MODULE_0__.scaleThreshold)([10, 20, 50, 100, 500], [20, 10, 5, 0, -10, -20]),
    jitter: (0,_d3_scale_js__WEBPACK_IMPORTED_MODULE_0__.scaleThreshold)([10, 20, 100, 500], [10, 5, 0, -10, -20]),
    download: (0,_d3_scale_js__WEBPACK_IMPORTED_MODULE_0__.scaleThreshold)([1e6, 10e6, 50e6, 100e6], [0, 5, 10, 20, 30]),
    upload: (0,_d3_scale_js__WEBPACK_IMPORTED_MODULE_0__.scaleThreshold)([1e6, 10e6, 50e6, 100e6], [0, 5, 10, 20, 30])
  },
  aimExperiencesDefs: {
    streaming: {
      input: ['latency', 'packetLoss', 'download', 'loadedLatencyIncrease'],
      pointThresholds: [15, 20, 40, 60]
    },
    gaming: {
      input: ['latency', 'packetLoss', 'loadedLatencyIncrease'],
      pointThresholds: [5, 15, 25, 30]
    },
    rtc: {
      input: ['latency', 'jitter', 'packetLoss', 'loadedLatencyIncrease'],
      pointThresholds: [5, 15, 25, 40]
    }
  }
};
var MAX_RETRIES = 20;
var ESTIMATED_HEADER_FRACTION = 0.005; // ~.5% of packet header / payload size. used when transferSize is not available.

var cfGetServerTime = function cfGetServerTime(r) {
  // extract server-timing from headers: server-timing: cfRequestDuration;dur=15.999794
  var serverTiming = r.headers.get("server-timing");
  if (serverTiming) {
    var re = serverTiming.match(/dur=([0-9.]+)/);
    if (re) return +re[1];
  }
};
var getTtfb = function getTtfb(perf) {
  return perf.responseStart - perf.requestStart;
};
var gePayloadDownload = function gePayloadDownload(perf) {
  return perf.responseEnd - perf.responseStart;
}; // min 1ms

var calcDownloadDuration = function calcDownloadDuration(_ref) {
  var ping = _ref.ping,
    payloadDownloadTime = _ref.payloadDownloadTime;
  return ping + payloadDownloadTime;
}; // request duration excluding server time

var calcUploadDuration = function calcUploadDuration(_ref2) {
  var ttfb = _ref2.ttfb;
  return ttfb;
};
var calcDownloadSpeed = function calcDownloadSpeed(_ref3, numBytes) {
  var duration = _ref3.duration,
    transferSize = _ref3.transferSize;
  // use transferSize if available. if estimating from numBytes, add ~0.5% of headers.
  var bits = 8 * (transferSize || +numBytes * (1 + ESTIMATED_HEADER_FRACTION));
  var secs = duration / 1000;
  return !secs ? undefined : bits / secs;
};
var calcUploadSpeed = function calcUploadSpeed(_ref4, numBytes) {
  var duration = _ref4.duration;
  var bits = 8 * numBytes * (1 + ESTIMATED_HEADER_FRACTION); // take into account estimated packet headers
  var secs = duration / 1000; // subtract estimated server time

  return !secs ? undefined : bits / secs;
};
var genContent = (0,_lodash_memoize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (numBytes) {
  return '0'.repeat(numBytes);
});

//
var _qsParams = /*#__PURE__*/new WeakMap();
var _fetchOptions = /*#__PURE__*/new WeakMap();
var _responseHook = /*#__PURE__*/new WeakMap();
var _onRunningChange = /*#__PURE__*/new WeakMap();
var _onNewMeasurementStarted = /*#__PURE__*/new WeakMap();
var _onMeasurementResult = /*#__PURE__*/new WeakMap();
var _onFinished$1 = /*#__PURE__*/new WeakMap();
var _onConnectionError$1 = /*#__PURE__*/new WeakMap();
var _measurements = /*#__PURE__*/new WeakMap();
var _downloadApi = /*#__PURE__*/new WeakMap();
var _uploadApi = /*#__PURE__*/new WeakMap();
var _running$2 = /*#__PURE__*/new WeakMap();
var _finished$1 = /*#__PURE__*/new WeakMap();
var _results$1 = /*#__PURE__*/new WeakMap();
var _measIdx = /*#__PURE__*/new WeakMap();
var _counter = /*#__PURE__*/new WeakMap();
var _retries = /*#__PURE__*/new WeakMap();
var _minDuration = /*#__PURE__*/new WeakMap();
var _throttleMs = /*#__PURE__*/new WeakMap();
var _estimatedServerTime = /*#__PURE__*/new WeakMap();
var _currentFetchPromise = /*#__PURE__*/new WeakMap();
var _currentNextMsmTimeoutId = /*#__PURE__*/new WeakMap();
var _setRunning$2 = /*#__PURE__*/new WeakSet();
var _saveMeasurementResults = /*#__PURE__*/new WeakSet();
var _nextMeasurement = /*#__PURE__*/new WeakSet();
var _cancelCurrentMeasurement = /*#__PURE__*/new WeakSet();
var BandwidthMeasurementEngine = /*#__PURE__*/function () {
  function BandwidthMeasurementEngine(_measurements2) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      downloadApiUrl = _ref5.downloadApiUrl,
      uploadApiUrl = _ref5.uploadApiUrl,
      _ref5$throttleMs = _ref5.throttleMs,
      throttleMs = _ref5$throttleMs === void 0 ? 0 : _ref5$throttleMs,
      _ref5$estimatedServer = _ref5.estimatedServerTime,
      estimatedServerTime = _ref5$estimatedServer === void 0 ? 0 : _ref5$estimatedServer;
    _classCallCheck(this, BandwidthMeasurementEngine);
    _classPrivateMethodInitSpec(this, _cancelCurrentMeasurement);
    _classPrivateMethodInitSpec(this, _nextMeasurement);
    _classPrivateMethodInitSpec(this, _saveMeasurementResults);
    // Internal methods
    _classPrivateMethodInitSpec(this, _setRunning$2);
    _classPrivateFieldInitSpec(this, _qsParams, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _fetchOptions, {
      writable: true,
      value: {}
    });
    _defineProperty(this, "finishRequestDuration", 1000);
    // download/upload duration (ms) to reach for stopping further measurements
    _defineProperty(this, "getServerTime", cfGetServerTime);
    // method to extract server time from response
    _classPrivateFieldInitSpec(this, _responseHook, {
      writable: true,
      value: function value(r) {
        return r;
      }
    });
    _classPrivateFieldInitSpec(this, _onRunningChange, {
      writable: true,
      value: function value() {}
    });
    _classPrivateFieldInitSpec(this, _onNewMeasurementStarted, {
      writable: true,
      value: function value() {}
    });
    _classPrivateFieldInitSpec(this, _onMeasurementResult, {
      writable: true,
      value: function value() {}
    });
    _classPrivateFieldInitSpec(this, _onFinished$1, {
      writable: true,
      value: function value() {}
    });
    _classPrivateFieldInitSpec(this, _onConnectionError$1, {
      writable: true,
      value: function value() {}
    });
    // Internal state
    _classPrivateFieldInitSpec(this, _measurements, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _downloadApi, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _uploadApi, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _running$2, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _finished$1, {
      writable: true,
      value: {
        down: false,
        up: false
      }
    });
    _classPrivateFieldInitSpec(this, _results$1, {
      writable: true,
      value: {
        down: {},
        up: {}
      }
    });
    _classPrivateFieldInitSpec(this, _measIdx, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _counter, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _retries, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _minDuration, {
      writable: true,
      value: -Infinity
    });
    // of current measurement
    _classPrivateFieldInitSpec(this, _throttleMs, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _estimatedServerTime, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _currentFetchPromise, {
      writable: true,
      value: undefined
    });
    _classPrivateFieldInitSpec(this, _currentNextMsmTimeoutId, {
      writable: true,
      value: undefined
    });
    if (!_measurements2) throw new Error('Missing measurements argument');
    if (!downloadApiUrl) throw new Error('Missing downloadApiUrl argument');
    if (!uploadApiUrl) throw new Error('Missing uploadApiUrl argument');
    _classPrivateFieldSet(this, _measurements, _measurements2);
    _classPrivateFieldSet(this, _downloadApi, downloadApiUrl);
    _classPrivateFieldSet(this, _uploadApi, uploadApiUrl);
    _classPrivateFieldSet(this, _throttleMs, throttleMs);
    _classPrivateFieldSet(this, _estimatedServerTime, Math.max(0, estimatedServerTime));
  }

  // Public attributes
  _createClass(BandwidthMeasurementEngine, [{
    key: "results",
    get: function get() {
      // read access to results
      return _classPrivateFieldGet(this, _results$1);
    }
  }, {
    key: "qsParams",
    get:
    // additional query string params to include in the requests
    function get() {
      return _classPrivateFieldGet(this, _qsParams);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _qsParams, v);
    }
  }, {
    key: "fetchOptions",
    get:
    // additional options included in the requests
    function get() {
      return _classPrivateFieldGet(this, _fetchOptions);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _fetchOptions, v);
    }
  }, {
    key: "responseHook",
    set:
    // pipe-through of response objects
    function set(f) {
      _classPrivateFieldSet(this, _responseHook, f);
    }
  }, {
    key: "onRunningChange",
    set:
    // callback invoked when engine starts/stops
    function set(f) {
      _classPrivateFieldSet(this, _onRunningChange, f);
    }
  }, {
    key: "onNewMeasurementStarted",
    set:
    // callback invoked when a new item in the measurement list is started
    function set(f) {
      _classPrivateFieldSet(this, _onNewMeasurementStarted, f);
    }
  }, {
    key: "onMeasurementResult",
    set:
    // callback invoked when a new measurement result arrives
    function set(f) {
      _classPrivateFieldSet(this, _onMeasurementResult, f);
    }
  }, {
    key: "onFinished",
    set:
    // callback invoked when all the measurements are finished
    function set(f) {
      _classPrivateFieldSet(this, _onFinished$1, f);
    }
  }, {
    key: "onConnectionError",
    set:
    // Invoked when unable to get a response from the API
    function set(f) {
      _classPrivateFieldSet(this, _onConnectionError$1, f);
    }

    // Public methods
  }, {
    key: "pause",
    value: function pause() {
      clearTimeout(_classPrivateFieldGet(this, _currentNextMsmTimeoutId));
      _classPrivateMethodGet(this, _cancelCurrentMeasurement, _cancelCurrentMeasurement2).call(this);
      _classPrivateMethodGet(this, _setRunning$2, _setRunning2$2).call(this, false);
    }
  }, {
    key: "play",
    value: function play() {
      if (!_classPrivateFieldGet(this, _running$2)) {
        _classPrivateMethodGet(this, _setRunning$2, _setRunning2$2).call(this, true);
        _classPrivateMethodGet(this, _nextMeasurement, _nextMeasurement2).call(this);
      }
    }
  }]);
  return BandwidthMeasurementEngine;
}();
function _setRunning2$2(running) {
  var _this = this;
  if (running !== _classPrivateFieldGet(this, _running$2)) {
    _classPrivateFieldSet(this, _running$2, running);
    setTimeout(function () {
      return _classPrivateFieldGet(_this, _onRunningChange).call(_this, _classPrivateFieldGet(_this, _running$2));
    });
  }
}
function _saveMeasurementResults2(measIdx, measTiming) {
  var _this2 = this;
  var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _measurements)[measIdx],
    bytes = _classPrivateFieldGet2.bytes,
    dir = _classPrivateFieldGet2.dir;
  var results = _classPrivateFieldGet(this, _results$1);
  var bytesResult = results[dir].hasOwnProperty(bytes) ? results[dir][bytes] : {
    timings: [],
    // count all measurements with same bytes and direction
    numMeasurements: _classPrivateFieldGet(this, _measurements).filter(function (_ref6) {
      var b = _ref6.bytes,
        d = _ref6.dir;
      return bytes === b && dir === d;
    }).map(function (m) {
      return m.count;
    }).reduce(function (agg, cnt) {
      return agg + cnt;
    }, 0)
  };
  !!measTiming && bytesResult.timings.push(measTiming);
  bytesResult.timings = bytesResult.timings.slice(-bytesResult.numMeasurements);
  results[dir][bytes] = bytesResult;
  if (measTiming) {
    setTimeout(function () {
      _classPrivateFieldGet(_this2, _onMeasurementResult).call(_this2, _objectSpread2({
        type: dir,
        bytes: bytes
      }, measTiming), results);
    });
  } else {
    _classPrivateFieldGet(this, _onNewMeasurementStarted).call(this, _classPrivateFieldGet(this, _measurements)[measIdx], results);
  }
}
function _nextMeasurement2() {
  var _this3 = this;
  var measurements = _classPrivateFieldGet(this, _measurements);
  var meas = measurements[_classPrivateFieldGet(this, _measIdx)];
  if (_classPrivateFieldGet(this, _counter) >= meas.count) {
    // Finished current measurement
    var finished = _classPrivateFieldGet(this, _finished$1);
    if (_classPrivateFieldGet(this, _minDuration) > this.finishRequestDuration && !meas.bypassMinDuration) {
      // mark direction as finished
      var _dir = meas.dir;
      _classPrivateFieldGet(this, _finished$1)[_dir] = true;
      Object.values(_classPrivateFieldGet(this, _finished$1)).every(function (finished) {
        return finished;
      }) && _classPrivateFieldGet(this, _onFinished$1).call(this, _classPrivateFieldGet(this, _results$1));
    }

    // clear settings
    _classPrivateFieldSet(this, _counter, 0);
    _classPrivateFieldSet(this, _minDuration, -Infinity);
    performance.clearResourceTimings();
    do {
      _classPrivateFieldSet(this, _measIdx, _classPrivateFieldGet(this, _measIdx) + 1); // skip through finished measurements
    } while (_classPrivateFieldGet(this, _measIdx) < measurements.length && finished[measurements[_classPrivateFieldGet(this, _measIdx)].dir]);
    if (_classPrivateFieldGet(this, _measIdx) >= measurements.length) {
      // reached the end: halt further measurements
      _classPrivateFieldSet(this, _finished$1, {
        down: true,
        up: true
      });
      _classPrivateMethodGet(this, _setRunning$2, _setRunning2$2).call(this, false);
      _classPrivateFieldGet(this, _onFinished$1).call(this, _classPrivateFieldGet(this, _results$1));
      return;
    }
    meas = measurements[_classPrivateFieldGet(this, _measIdx)];
  }
  var measIdx = _classPrivateFieldGet(this, _measIdx);
  if (_classPrivateFieldGet(this, _counter) === 0) {
    _classPrivateMethodGet(this, _saveMeasurementResults, _saveMeasurementResults2).call(this, measIdx); // register measurement start
  }
  var _meas = meas,
    numBytes = _meas.bytes,
    dir = _meas.dir;
  var isDown = dir === 'down';
  var apiUrl = isDown ? _classPrivateFieldGet(this, _downloadApi) : _classPrivateFieldGet(this, _uploadApi);
  var qsParams = Object.assign({}, _classPrivateFieldGet(this, _qsParams));
  isDown && (qsParams.bytes = "".concat(numBytes));
  var url = "".concat(apiUrl.startsWith('http') || apiUrl.startsWith('//') ? '' : window.location.origin // use abs to match perf timing urls
  ).concat(apiUrl, "?").concat(Object.entries(qsParams).map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      k = _ref8[0],
      v = _ref8[1];
    return "".concat(k, "=").concat(v);
  }).join('&'));
  var fetchOpt = Object.assign({}, isDown ? {} : {
    method: 'POST',
    body: genContent(numBytes)
  }, _classPrivateFieldGet(this, _fetchOptions));
  var serverTime;
  var curPromise = _classPrivateFieldSet(this, _currentFetchPromise, fetch(url, fetchOpt) // eslint-disable-line compat/compat
  .then(function (r) {
    if (r.ok) return r;
    throw Error(r.statusText);
  }).then(function (r) {
    _this3.getServerTime && (serverTime = _this3.getServerTime(r));
    return r;
  }).then(function (r) {
    return r.text().then(function (body) {
      _classPrivateFieldGet(_this3, _responseHook) && _classPrivateFieldGet(_this3, _responseHook).call(_this3, {
        url: url,
        headers: r.headers,
        body: body
      });
      return body;
    });
  }).then(function (_, reject) {
    if (curPromise._cancel) {
      reject('cancelled');
      return;
    }
    var perf = performance.getEntriesByName(url).slice(-1)[0]; // get latest perf timing
    var timing = {
      transferSize: perf.transferSize,
      ttfb: getTtfb(perf),
      payloadDownloadTime: gePayloadDownload(perf),
      serverTime: serverTime || -1,
      measTime: new Date()
    };
    timing.ping = Math.max(1e-2, timing.ttfb - (serverTime || _classPrivateFieldGet(_this3, _estimatedServerTime))); // ttfb = network latency + server time

    timing.duration = (isDown ? calcDownloadDuration : calcUploadDuration)(timing);
    timing.bps = (isDown ? calcDownloadSpeed : calcUploadSpeed)(timing, numBytes);
    if (isDown && numBytes) {
      var reqSize = +numBytes;
      if (timing.transferSize && (timing.transferSize < reqSize || timing.transferSize / reqSize > 1.05)) {
        // log if transferSize is too different from requested size
        console.warn("Requested ".concat(reqSize, "B but received ").concat(timing.transferSize, "B (").concat(Math.round(timing.transferSize / reqSize * 1e4) / 1e2, "%)."));
      }
    }
    _classPrivateMethodGet(_this3, _saveMeasurementResults, _saveMeasurementResults2).call(_this3, measIdx, timing);
    var requestDuration = timing.duration;
    _classPrivateFieldSet(_this3, _minDuration, _classPrivateFieldGet(_this3, _minDuration) < 0 ? requestDuration : Math.min(_classPrivateFieldGet(_this3, _minDuration), requestDuration)); // carry minimum request duration

    _classPrivateFieldSet(_this3, _counter, _classPrivateFieldGet(_this3, _counter) + 1);
    _classPrivateFieldSet(_this3, _retries, 0);
    if (_classPrivateFieldGet(_this3, _throttleMs)) {
      _classPrivateFieldSet(_this3, _currentNextMsmTimeoutId, setTimeout(function () {
        return _classPrivateMethodGet(_this3, _nextMeasurement, _nextMeasurement2).call(_this3);
      }, _classPrivateFieldGet(_this3, _throttleMs)));
    } else {
      _classPrivateMethodGet(_this3, _nextMeasurement, _nextMeasurement2).call(_this3);
    }
  })["catch"](function (error) {
    var _this$retries, _this$retries2;
    if (curPromise._cancel) return;
    console.warn("Error fetching ".concat(url, ": ").concat(error));
    if ((_classPrivateFieldSet(_this3, _retries, (_this$retries = _classPrivateFieldGet(_this3, _retries), _this$retries2 = _this$retries++, _this$retries)), _this$retries2) < MAX_RETRIES) {
      _classPrivateMethodGet(_this3, _nextMeasurement, _nextMeasurement2).call(_this3); // keep trying
    } else {
      _classPrivateFieldSet(_this3, _retries, 0);
      _classPrivateMethodGet(_this3, _setRunning$2, _setRunning2$2).call(_this3, false);
      _classPrivateFieldGet(_this3, _onConnectionError$1).call(_this3, "Connection failed to ".concat(url, ". Gave up after ").concat(MAX_RETRIES, " retries."));
    }
  }));
}
function _cancelCurrentMeasurement2() {
  var curPromise = _classPrivateFieldGet(this, _currentFetchPromise);
  curPromise && (curPromise._cancel = true);
}
var BandwidthEngine$2 = BandwidthMeasurementEngine;
var _excluded$5 = ["measureParallelLatency", "parallelLatencyThrottleMs", "downloadApiUrl", "uploadApiUrl", "estimatedServerTime"];
var _latencyEngine = /*#__PURE__*/new WeakMap();
var _setLatencyRunning = /*#__PURE__*/new WeakSet();
var BandwidthWithParallelLatencyEngine = /*#__PURE__*/function (_BandwidthEngine) {
  _inherits(BandwidthWithParallelLatencyEngine, _BandwidthEngine);
  var _super = _createSuper(BandwidthWithParallelLatencyEngine);
  function BandwidthWithParallelLatencyEngine(measurements) {
    var _thisSuper, _thisSuper2, _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$measureParallelL = _ref.measureParallelLatency,
      measureParallelLatency = _ref$measureParallelL === void 0 ? false : _ref$measureParallelL,
      _ref$parallelLatencyT = _ref.parallelLatencyThrottleMs,
      parallelLatencyThrottleMs = _ref$parallelLatencyT === void 0 ? 100 : _ref$parallelLatencyT,
      downloadApiUrl = _ref.downloadApiUrl,
      uploadApiUrl = _ref.uploadApiUrl,
      _ref$estimatedServerT = _ref.estimatedServerTime,
      estimatedServerTime = _ref$estimatedServerT === void 0 ? 0 : _ref$estimatedServerT,
      ptProps = _objectWithoutProperties(_ref, _excluded$5);
    _classCallCheck(this, BandwidthWithParallelLatencyEngine);
    _this = _super.call(this, measurements, _objectSpread2({
      downloadApiUrl: downloadApiUrl,
      uploadApiUrl: uploadApiUrl,
      estimatedServerTime: estimatedServerTime
    }, ptProps));
    // Internal methods
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _setLatencyRunning);
    // Internal state
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _latencyEngine, {
      writable: true,
      value: void 0
    });
    if (measureParallelLatency) {
      _classPrivateFieldSet(_assertThisInitialized(_this), _latencyEngine, new BandwidthEngine$2([{
        dir: 'down',
        bytes: 0,
        count: Infinity,
        bypassMinDuration: true
      }], {
        downloadApiUrl: downloadApiUrl,
        uploadApiUrl: uploadApiUrl,
        estimatedServerTime: estimatedServerTime,
        throttleMs: parallelLatencyThrottleMs
      }));
      _classPrivateFieldGet(_assertThisInitialized(_this), _latencyEngine).qsParams = {
        during: "".concat(measurements[0].dir, "load")
      };
      _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(BandwidthWithParallelLatencyEngine.prototype)), "onRunningChange", _classPrivateMethodGet(_assertThisInitialized(_this), _setLatencyRunning, _setLatencyRunning2), _thisSuper, true);
      _set((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(BandwidthWithParallelLatencyEngine.prototype)), "onConnectionError", function () {
        return _classPrivateFieldGet(_assertThisInitialized(_this), _latencyEngine).pause();
      }, _thisSuper2, true);
    }
    return _this;
  }

  // Public attributes
  _createClass(BandwidthWithParallelLatencyEngine, [{
    key: "latencyResults",
    get: function get() {
      // read access to latency results
      return _classPrivateFieldGet(this, _latencyEngine) && _classPrivateFieldGet(this, _latencyEngine).results.down[0].timings;
    }

    // callback invoked when a new parallel latency result arrives
  }, {
    key: "onParallelLatencyResult",
    set: function set(f) {
      _classPrivateFieldGet(this, _latencyEngine) && (_classPrivateFieldGet(this, _latencyEngine).onMeasurementResult = function (res) {
        return f(res);
      });
    }

    // Overridden attributes
  }, {
    key: "fetchOptions",
    get: function get() {
      return _get(_getPrototypeOf(BandwidthWithParallelLatencyEngine.prototype), "fetchOptions", this);
    },
    set: function set(fetchOptions) {
      _set(_getPrototypeOf(BandwidthWithParallelLatencyEngine.prototype), "fetchOptions", fetchOptions, this, true);
      _classPrivateFieldGet(this, _latencyEngine) && (_classPrivateFieldGet(this, _latencyEngine).fetchOptions = fetchOptions);
    }
  }, {
    key: "onRunningChange",
    set: function set(onRunningChange) {
      var _this2 = this;
      _set(_getPrototypeOf(BandwidthWithParallelLatencyEngine.prototype), "onRunningChange", function (running) {
        _classPrivateMethodGet(_this2, _setLatencyRunning, _setLatencyRunning2).call(_this2, running);
        onRunningChange(running);
      }, this, true);
    }
  }, {
    key: "onConnectionError",
    set: function set(onConnectionError) {
      var _this3 = this;
      _set(_getPrototypeOf(BandwidthWithParallelLatencyEngine.prototype), "onConnectionError", function () {
        _classPrivateFieldGet(_this3, _latencyEngine) && _classPrivateFieldGet(_this3, _latencyEngine).pause();
        onConnectionError.apply(void 0, arguments);
      }, this, true);
    }
  }]);
  return BandwidthWithParallelLatencyEngine;
}(BandwidthEngine$2);
function _setLatencyRunning2(running) {
  var _this4 = this;
  _classPrivateFieldGet(this, _latencyEngine) && (!running ? _classPrivateFieldGet(this, _latencyEngine).pause() :
  // slight delay in starting latency measurements
  setTimeout(function () {
    return _classPrivateFieldGet(_this4, _latencyEngine).play();
  }, 20));
}
var BandwidthEngine$1 = BandwidthWithParallelLatencyEngine;
var _excluded$4 = ["measurementId", "logApiUrl"];
var _measurementId$1 = /*#__PURE__*/new WeakMap();
var _token = /*#__PURE__*/new WeakMap();
var _requestTime = /*#__PURE__*/new WeakMap();
var _logApiUrl = /*#__PURE__*/new WeakMap();
var _loggingResponseHook = /*#__PURE__*/new WeakSet();
var _logMeasurement = /*#__PURE__*/new WeakSet();
var LoggingBandwidthEngine = /*#__PURE__*/function (_BandwidthEngine) {
  _inherits(LoggingBandwidthEngine, _BandwidthEngine);
  var _super = _createSuper(LoggingBandwidthEngine);
  function LoggingBandwidthEngine(measurements) {
    var _thisSuper, _thisSuper2, _thisSuper3, _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      measurementId = _ref.measurementId,
      logApiUrl = _ref.logApiUrl,
      ptProps = _objectWithoutProperties(_ref, _excluded$4);
    _classCallCheck(this, LoggingBandwidthEngine);
    _this = _super.call(this, measurements, ptProps);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _logMeasurement);
    // Internal methods
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _loggingResponseHook);
    // Internal state
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _measurementId$1, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _token, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _requestTime, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _logApiUrl, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(_assertThisInitialized(_this), _measurementId$1, measurementId);
    _classPrivateFieldSet(_assertThisInitialized(_this), _logApiUrl, logApiUrl);
    _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(LoggingBandwidthEngine.prototype)), "qsParams", logApiUrl ? {
      measId: _classPrivateFieldGet(_assertThisInitialized(_this), _measurementId$1)
    } : {}, _thisSuper, true);
    _set((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(LoggingBandwidthEngine.prototype)), "responseHook", function (r) {
      return _classPrivateMethodGet(_assertThisInitialized(_this), _loggingResponseHook, _loggingResponseHook2).call(_assertThisInitialized(_this), r);
    }, _thisSuper2, true);
    _set((_thisSuper3 = _assertThisInitialized(_this), _getPrototypeOf(LoggingBandwidthEngine.prototype)), "onMeasurementResult", function (meas) {
      return _classPrivateMethodGet(_assertThisInitialized(_this), _logMeasurement, _logMeasurement2).call(_assertThisInitialized(_this), meas);
    }, _thisSuper3, true);
    return _this;
  }

  // Overridden attributes
  _createClass(LoggingBandwidthEngine, [{
    key: "qsParams",
    set: function set(qsParams) {
      _set(_getPrototypeOf(LoggingBandwidthEngine.prototype), "qsParams", _classPrivateFieldGet(this, _logApiUrl) ? _objectSpread2({
        measId: _classPrivateFieldGet(this, _measurementId$1)
      }, qsParams) : qsParams, this, true);
    }
  }, {
    key: "responseHook",
    set: function set(responseHook) {
      var _this2 = this;
      _set(_getPrototypeOf(LoggingBandwidthEngine.prototype), "responseHook", function (r) {
        responseHook(r);
        _classPrivateMethodGet(_this2, _loggingResponseHook, _loggingResponseHook2).call(_this2, r);
      }, this, true);
    }
  }, {
    key: "onMeasurementResult",
    set: function set(onMeasurementResult) {
      var _this3 = this;
      _set(_getPrototypeOf(LoggingBandwidthEngine.prototype), "onMeasurementResult", function (meas) {
        for (var _len = arguments.length, restArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          restArgs[_key - 1] = arguments[_key];
        }
        onMeasurementResult.apply(void 0, [meas].concat(restArgs));
        _classPrivateMethodGet(_this3, _logMeasurement, _logMeasurement2).call(_this3, meas);
      }, this, true);
    }
  }]);
  return LoggingBandwidthEngine;
}(BandwidthEngine$1);
function _loggingResponseHook2(r) {
  if (!_classPrivateFieldGet(this, _logApiUrl)) return;

  // get request time
  _classPrivateFieldSet(this, _requestTime, +r.headers.get("cf-meta-request-time"));

  // get token in payload
  _classPrivateFieldSet(this, _token, r.body.slice(-300).split('___').pop());
}
function _logMeasurement2(measData) {
  if (!_classPrivateFieldGet(this, _logApiUrl)) return;
  var logData = {
    type: measData.type,
    bytes: measData.bytes,
    ping: Math.round(measData.ping),
    // round to ms
    ttfb: Math.round(measData.ttfb),
    // round to ms
    payloadDownloadTime: Math.round(measData.payloadDownloadTime),
    duration: Math.round(measData.duration),
    transferSize: Math.round(measData.transferSize),
    serverTime: Math.round(measData.serverTime),
    token: _classPrivateFieldGet(this, _token),
    requestTime: _classPrivateFieldGet(this, _requestTime),
    measId: _classPrivateFieldGet(this, _measurementId$1)
  };
  _classPrivateFieldSet(this, _token, null);
  _classPrivateFieldSet(this, _requestTime, null);

  // eslint-disable-next-line compat/compat
  fetch(_classPrivateFieldGet(this, _logApiUrl), _objectSpread2({
    method: 'POST',
    body: JSON.stringify(logData)
  }, this.fetchOptions));
}
var BandwidthEngine = LoggingBandwidthEngine;
var _running$1 = /*#__PURE__*/new WeakMap();
var _currentPromise = /*#__PURE__*/new WeakMap();
var _promiseFn = /*#__PURE__*/new WeakMap();
var _setRunning$1 = /*#__PURE__*/new WeakSet();
var _next$1 = /*#__PURE__*/new WeakSet();
var _cancelCurrent = /*#__PURE__*/new WeakSet();
var PromiseEngine = /*#__PURE__*/function () {
  function PromiseEngine(promiseFn) {
    _classCallCheck(this, PromiseEngine);
    _classPrivateMethodInitSpec(this, _cancelCurrent);
    _classPrivateMethodInitSpec(this, _next$1);
    // Internal methods
    _classPrivateMethodInitSpec(this, _setRunning$1);
    // Internal state
    _classPrivateFieldInitSpec(this, _running$1, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _currentPromise, {
      writable: true,
      value: undefined
    });
    _classPrivateFieldInitSpec(this, _promiseFn, {
      writable: true,
      value: void 0
    });
    if (!promiseFn) throw new Error("Missing operation to perform");
    _classPrivateFieldSet(this, _promiseFn, promiseFn);
    this.play();
  }

  // Public methods
  _createClass(PromiseEngine, [{
    key: "pause",
    value: function pause() {
      _classPrivateMethodGet(this, _cancelCurrent, _cancelCurrent2).call(this);
      _classPrivateMethodGet(this, _setRunning$1, _setRunning2$1).call(this, false);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
    }
  }, {
    key: "play",
    value: function play() {
      if (!_classPrivateFieldGet(this, _running$1)) {
        _classPrivateMethodGet(this, _setRunning$1, _setRunning2$1).call(this, true);
        _classPrivateMethodGet(this, _next$1, _next2$1).call(this);
      }
    }
  }]);
  return PromiseEngine;
}();
function _setRunning2$1(running) {
  if (running !== _classPrivateFieldGet(this, _running$1)) {
    _classPrivateFieldSet(this, _running$1, running);
  }
}
function _next2$1() {
  var _this2 = this;
  var curPromise = _classPrivateFieldSet(this, _currentPromise, _classPrivateFieldGet(this, _promiseFn).call(this) // eslint-disable-line compat/compat
  .then(function () {
    !curPromise._cancel && _classPrivateMethodGet(_this2, _next$1, _next2$1).call(_this2);
  }));
}
function _cancelCurrent2() {
  var curPromise = _classPrivateFieldGet(this, _currentPromise);
  curPromise && (curPromise._cancel = true);
}
var _engines = /*#__PURE__*/new WeakMap();
var LoadNetworkEngine = /*#__PURE__*/function () {
  function LoadNetworkEngine() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      download = _ref.download,
      upload = _ref.upload;
    _classCallCheck(this, LoadNetworkEngine);
    // Public attributes
    _defineProperty(this, "qsParams", {});
    // additional query string params to include in the requests
    _defineProperty(this, "fetchOptions", {});
    // Internal state
    _classPrivateFieldInitSpec(this, _engines, {
      writable: true,
      value: []
    });
    // Expected attrs for each: { apiUrl, chunkSize }
    if (!download && !upload) throw new Error('Missing at least one of download/upload config');
    [[download, 'download'], [upload, 'upload']].filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        cfg = _ref3[0];
      return cfg;
    }).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        cfg = _ref5[0],
        type = _ref5[1];
      var apiUrl = cfg.apiUrl,
        chunkSize = cfg.chunkSize;
      if (!apiUrl) throw new Error("Missing ".concat(type, " apiUrl argument"));
      if (!chunkSize) throw new Error("Missing ".concat(type, " chunkSize argument"));
    });
    var getLoadEngine = function getLoadEngine(_ref6) {
      var apiUrl = _ref6.apiUrl,
        _ref6$qsParams = _ref6.qsParams,
        qsParams = _ref6$qsParams === void 0 ? {} : _ref6$qsParams,
        _ref6$fetchOptions = _ref6.fetchOptions,
        fetchOptions = _ref6$fetchOptions === void 0 ? {} : _ref6$fetchOptions;
      return new PromiseEngine(function () {
        var fetchQsParams = Object.assign({}, qsParams, _this.qsParams);
        var url = "".concat(apiUrl.startsWith('http') || apiUrl.startsWith('//') ? '' : window.location.origin // use abs to match perf timing urls
        ).concat(apiUrl, "?").concat(Object.entries(fetchQsParams).map(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            k = _ref8[0],
            v = _ref8[1];
          return "".concat(k, "=").concat(v);
        }).join('&'));
        var fetchOpt = Object.assign({}, fetchOptions, _this.fetchOptions);
        return fetch(url, fetchOpt).then(function (r) {
          if (r.ok) return r;
          throw Error(r.statusText);
        }).then(function (r) {
          return r.text();
        });
      });
    };
    download && _classPrivateFieldGet(this, _engines).push(getLoadEngine({
      apiUrl: download.apiUrl,
      qsParams: {
        bytes: "".concat(download.chunkSize)
      }
    }));
    upload && _classPrivateFieldGet(this, _engines).push(getLoadEngine({
      apiUrl: upload.apiUrl,
      fetchOptions: {
        method: 'POST',
        body: '0'.repeat(upload.chunkSize)
      }
    }));
  }
  _createClass(LoadNetworkEngine, [{
    key: "pause",
    value:
    // additional options included in the requests
    // Public methods
    function pause() {
      _classPrivateFieldGet(this, _engines).forEach(function (engine) {
        return engine.pause();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
    }
  }, {
    key: "play",
    value: function play() {
      _classPrivateFieldGet(this, _engines).forEach(function (engine) {
        return engine.play();
      });
    }
  }]);
  return LoadNetworkEngine;
}();
var LoadNetworkEngine$1 = LoadNetworkEngine;
var _excluded$3 = ["iceServers", "acceptIceCandidate", "dataChannelCfg"];
var _established = /*#__PURE__*/new WeakMap();
var _sender = /*#__PURE__*/new WeakMap();
var _receiver = /*#__PURE__*/new WeakMap();
var _senderDc = /*#__PURE__*/new WeakMap();
var _receiverDc = /*#__PURE__*/new WeakMap();
var SelfWebRtcDataConnection = /*#__PURE__*/function () {
  function SelfWebRtcDataConnection() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$iceServers = _ref.iceServers,
      iceServers = _ref$iceServers === void 0 ? [] : _ref$iceServers,
      _ref$acceptIceCandida = _ref.acceptIceCandidate,
      acceptIceCandidate = _ref$acceptIceCandida === void 0 ? function (candidate) {
        var protocol = candidate.protocol || '';
        // parsed webRTC candidate properties not extracted in Firefox: https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate
        if (!protocol && candidate.candidate) {
          var sdpAttrs = candidate.candidate.split(' ');
          sdpAttrs.length >= 3 && (protocol = sdpAttrs[2]);
        }
        return protocol.toLowerCase() === 'udp';
      } : _ref$acceptIceCandida,
      _ref$dataChannelCfg = _ref.dataChannelCfg,
      dataChannelCfg = _ref$dataChannelCfg === void 0 ? {
        ordered: false,
        maxRetransmits: 0
      } : _ref$dataChannelCfg,
      rtcPeerConnectionCfg = _objectWithoutProperties(_ref, _excluded$3);
    _classCallCheck(this, SelfWebRtcDataConnection);
    // Public attributes
    _defineProperty(this, "onOpen", function () {});
    // callback invoked when WebRTC TURN connection is established
    _defineProperty(this, "onClose", function () {});
    // callback invoked when WebRTC TURN connection is closed
    _defineProperty(this, "onMessageReceived", function () {});
    // Internal state
    _classPrivateFieldInitSpec(this, _established, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _sender, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _receiver, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _senderDc, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _receiverDc, {
      writable: true,
      value: void 0
    });
    var sender = new RTCPeerConnection(_objectSpread2({
      iceServers: iceServers
    }, rtcPeerConnectionCfg));
    var receiver = new RTCPeerConnection(_objectSpread2({
      iceServers: iceServers
    }, rtcPeerConnectionCfg));
    var senderDc = sender.createDataChannel('channel', dataChannelCfg);
    senderDc.onopen = function () {
      _classPrivateFieldSet(_this, _established, true);
      _this.onOpen();
    };
    senderDc.onclose = function () {
      return _this.close();
    };
    // senderDc.onmessage = msg => this.#onMessage(msg.data);

    receiver.ondatachannel = function (e) {
      var dc = e.channel;
      dc.onclose = function () {
        return _this.close();
      };
      dc.onmessage = function (msg) {
        return _this.onMessageReceived(msg.data);
      };
      _classPrivateFieldSet(_this, _receiverDc, dc);
    };

    // sender.onconnectionstatechange = e => console.log('connection state change', e);
    // sender.oniceconnectionstatechange = e => console.log('ice connection state change', e);
    // sender.onicecandidateerror = e => console.log('ice error', e);
    sender.onicecandidate = function (e) {
      // console.log('sender', e.candidate);
      e.candidate && acceptIceCandidate(e.candidate) && receiver.addIceCandidate(e.candidate);
    };
    receiver.onicecandidate = function (e) {
      // console.log('receiver', e.candidate);
      e.candidate && acceptIceCandidate(e.candidate) && sender.addIceCandidate(e.candidate);
    };
    sender.createOffer().then(function (offer) {
      return sender.setLocalDescription(offer);
    }).then(function () {
      return receiver.setRemoteDescription(sender.localDescription);
    }).then(function () {
      return receiver.createAnswer();
    }).then(function (answer) {
      return receiver.setLocalDescription(answer);
    }).then(function () {
      return sender.setRemoteDescription(receiver.localDescription);
    });
    _classPrivateFieldSet(this, _sender, sender);
    _classPrivateFieldSet(this, _receiver, receiver);
    _classPrivateFieldSet(this, _senderDc, senderDc);
    _classPrivateFieldSet(this, _established, false);
  }
  _createClass(SelfWebRtcDataConnection, [{
    key: "send",
    value:
    // callback invoked when a new message is received from the TURN server
    // Public methods
    function send(msg) {
      return _classPrivateFieldGet(this, _senderDc).send(msg);
    }
  }, {
    key: "close",
    value: function close() {
      _classPrivateFieldGet(this, _sender) && _classPrivateFieldGet(this, _sender).close();
      _classPrivateFieldGet(this, _receiver) && _classPrivateFieldGet(this, _receiver).close();
      _classPrivateFieldGet(this, _senderDc) && _classPrivateFieldGet(this, _senderDc).close();
      _classPrivateFieldGet(this, _receiverDc) && _classPrivateFieldGet(this, _receiverDc).close();
      _classPrivateFieldGet(this, _established) && this.onClose();
      _classPrivateFieldSet(this, _established, false);
      return this;
    }
  }]);
  return SelfWebRtcDataConnection;
}();
var _onCredentialsFailure = /*#__PURE__*/new WeakMap();
var _onConnectionError = /*#__PURE__*/new WeakMap();
var _onFinished = /*#__PURE__*/new WeakMap();
var _msgTracker = /*#__PURE__*/new WeakMap();
var _webRtcConnection = /*#__PURE__*/new WeakMap();
var _numMsgs = /*#__PURE__*/new WeakMap();
var PacketLossEngine$1 = /*#__PURE__*/function () {
  function PacketLossEngine() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      turnServerUri = _ref.turnServerUri,
      turnServerCredsApi = _ref.turnServerCredsApi,
      _ref$turnServerCredsA = _ref.turnServerCredsApiParser,
      turnServerCredsApiParser = _ref$turnServerCredsA === void 0 ? function (_ref2) {
        var username = _ref2.username,
          credential = _ref2.credential;
        return {
          turnServerUser: username,
          turnServerPass: credential
        };
      } : _ref$turnServerCredsA,
      _ref$turnServerCredsA2 = _ref.turnServerCredsApiIncludeCredentials,
      turnServerCredsApiIncludeCredentials = _ref$turnServerCredsA2 === void 0 ? false : _ref$turnServerCredsA2,
      turnServerUser = _ref.turnServerUser,
      turnServerPass = _ref.turnServerPass,
      _ref$numMsgs = _ref.numMsgs,
      numMsgs = _ref$numMsgs === void 0 ? 100 : _ref$numMsgs,
      _ref$batchSize = _ref.batchSize,
      batchSize = _ref$batchSize === void 0 ? 10 : _ref$batchSize,
      _ref$batchWaitTime = _ref.batchWaitTime,
      batchWaitTime = _ref$batchWaitTime === void 0 ? 10 : _ref$batchWaitTime,
      _ref$responsesWaitTim = _ref.responsesWaitTime,
      responsesWaitTime = _ref$responsesWaitTim === void 0 ? 5000 : _ref$responsesWaitTim,
      _ref$connectionTimeou = _ref.connectionTimeout,
      connectionTimeout = _ref$connectionTimeou === void 0 ? 5000 : _ref$connectionTimeou;
    _classCallCheck(this, PacketLossEngine);
    // Public attributes
    _classPrivateFieldInitSpec(this, _onCredentialsFailure, {
      writable: true,
      value: function value() {}
    });
    _classPrivateFieldInitSpec(this, _onConnectionError, {
      writable: true,
      value: function value() {}
    });
    _classPrivateFieldInitSpec(this, _onFinished, {
      writable: true,
      value: function value() {}
    });
    _defineProperty(this, "onMsgSent", function () {});
    // Invoked when sending a new message to the TURN server
    _defineProperty(this, "onAllMsgsSent", function () {});
    // Invoked when all messages have been sent
    _defineProperty(this, "onMsgReceived", function () {});
    // Public methods
    // Internal state
    _classPrivateFieldInitSpec(this, _msgTracker, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _webRtcConnection, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _numMsgs, {
      writable: true,
      value: void 0
    });
    if (!turnServerUri) throw new Error('Missing turnServerUri argument');
    if ((!turnServerUser || !turnServerPass) && !turnServerCredsApi) throw new Error('Missing either turnServerCredsApi or turnServerUser+turnServerPass arguments');
    _classPrivateFieldSet(this, _numMsgs, numMsgs);
    (!turnServerUser || !turnServerPass ?
    // Get TURN credentials from API endpoint if not statically supplied
    fetch(turnServerCredsApi, {
      credentials: turnServerCredsApiIncludeCredentials ? 'include' : undefined
    }).then(function (r) {
      return r.json();
    }).then(function (d) {
      if (d.error) throw d.error;
      return d;
    }).then(turnServerCredsApiParser) : Promise.resolve({
      turnServerUser: turnServerUser,
      turnServerPass: turnServerPass
    }))["catch"](function (e) {
      return _classPrivateFieldGet(_this, _onCredentialsFailure).call(_this, e);
    }).then(function (_ref3) {
      var turnServerUser = _ref3.turnServerUser,
        turnServerPass = _ref3.turnServerPass;
      var c = _classPrivateFieldSet(_this, _webRtcConnection, new SelfWebRtcDataConnection({
        iceServers: [{
          urls: "turn:".concat(turnServerUri, "?transport=udp"),
          username: turnServerUser,
          credential: turnServerPass
        }],
        iceTransportPolicy: 'relay'
      }));
      var connectionSuccess = false;
      setTimeout(function () {
        if (!connectionSuccess) {
          c.close();
          _classPrivateFieldGet(_this, _onConnectionError).call(_this, 'ICE connection timeout!');
        }
      }, connectionTimeout);
      var msgTracker = _classPrivateFieldGet(_this, _msgTracker);
      c.onOpen = function () {
        connectionSuccess = true;
        var self = _this;
        (function sendNum(n) {
          if (n <= numMsgs) {
            var i = n;
            while (i <= Math.min(numMsgs, n + batchSize - 1)) {
              msgTracker[i] = false;
              c.send(i);
              self.onMsgSent(i);
              i++;
            }
            setTimeout(function () {
              return sendNum(i);
            }, batchWaitTime);
          } else {
            self.onAllMsgsSent(Object.keys(msgTracker).length);
            var finishFn = function finishFn() {
              c.close();
              _classPrivateFieldGet(self, _onFinished).call(self, self.results);
            };
            var finishTimeout = setTimeout(finishFn, responsesWaitTime);
            var missingMsgs = Object.values(_classPrivateFieldGet(self, _msgTracker)).filter(function (recv) {
              return !recv;
            }).length;
            c.onMessageReceived = function (msg) {
              clearTimeout(finishTimeout);
              msgTracker[msg] = true;
              self.onMsgReceived(msg);
              missingMsgs--;
              if (missingMsgs <= 0 && Object.values(_classPrivateFieldGet(self, _msgTracker)).every(function (recv) {
                return recv;
              })) {
                // Last msg received, shortcut out
                finishFn();
              } else {
                // restart timeout
                finishTimeout = setTimeout(finishFn, responsesWaitTime);
              }
            };
          }
        })(1);
      };
      c.onMessageReceived = function (msg) {
        msgTracker[msg] = true;
        _this.onMsgReceived(msg);
      };
    })["catch"](function (e) {
      return _classPrivateFieldGet(_this, _onConnectionError).call(_this, e.toString());
    });
  }
  _createClass(PacketLossEngine, [{
    key: "onCredentialsFailure",
    set:
    // Invoked when unable to fetch TURN server credentials
    function set(f) {
      _classPrivateFieldSet(this, _onCredentialsFailure, f);
    }
  }, {
    key: "onConnectionError",
    set:
    // Invoked when unable to establish a connection with TURN server
    function set(f) {
      _classPrivateFieldSet(this, _onConnectionError, f);
    }
  }, {
    key: "onFinished",
    set:
    // Invoked when the packet loss measurement is complete
    function set(f) {
      _classPrivateFieldSet(this, _onFinished, f);
    }
  }, {
    key: "results",
    get:
    // Invoked when receiving a new message from the TURN server

    function get() {
      var totalMessages = _classPrivateFieldGet(this, _numMsgs);
      var numMessagesSent = Object.keys(_classPrivateFieldGet(this, _msgTracker)).length;
      var lostMessages = Object.entries(_classPrivateFieldGet(this, _msgTracker)).filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          recv = _ref5[1];
        return !recv;
      }).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 1),
          n = _ref7[0];
        return +n;
      });
      var packetLoss = lostMessages.length / numMessagesSent;
      return {
        totalMessages: totalMessages,
        numMessagesSent: numMessagesSent,
        packetLoss: packetLoss,
        lostMessages: lostMessages
      };
    }
  }]);
  return PacketLossEngine;
}();
var _excluded$2 = ["downloadChunkSize", "uploadChunkSize", "downloadApiUrl", "uploadApiUrl"];
var _loadEngine = /*#__PURE__*/new WeakMap();
var PacketLossUnderLoadEngine = /*#__PURE__*/function (_PacketLossEngine) {
  _inherits(PacketLossUnderLoadEngine, _PacketLossEngine);
  var _super = _createSuper(PacketLossUnderLoadEngine);
  function PacketLossUnderLoadEngine() {
    var _thisSuper, _thisSuper3, _thisSuper5, _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      downloadChunkSize = _ref.downloadChunkSize,
      uploadChunkSize = _ref.uploadChunkSize,
      downloadApiUrl = _ref.downloadApiUrl,
      uploadApiUrl = _ref.uploadApiUrl,
      ptProps = _objectWithoutProperties(_ref, _excluded$2);
    _classCallCheck(this, PacketLossUnderLoadEngine);
    _this = _super.call(this, ptProps);
    // Internal state
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _loadEngine, {
      writable: true,
      value: void 0
    });
    if (downloadChunkSize || uploadChunkSize) {
      _classPrivateFieldSet(_assertThisInitialized(_this), _loadEngine, new LoadNetworkEngine$1({
        download: downloadChunkSize ? {
          apiUrl: downloadApiUrl,
          chunkSize: downloadChunkSize
        } : null,
        upload: uploadChunkSize ? {
          apiUrl: uploadApiUrl,
          chunkSize: uploadChunkSize
        } : null
      }));
      _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PacketLossUnderLoadEngine.prototype)), "onCredentialsFailure", _set((_thisSuper5 = _assertThisInitialized(_this), _getPrototypeOf(PacketLossUnderLoadEngine.prototype)), "onConnectionError", _set((_thisSuper3 = _assertThisInitialized(_this), _getPrototypeOf(PacketLossUnderLoadEngine.prototype)), "onFinished", function () {
        return _classPrivateFieldGet(_assertThisInitialized(_this), _loadEngine).stop();
      }, _thisSuper3, true), _thisSuper5, true), _thisSuper, true);
    }
    return _this;
  }

  // Overridden attributes
  _createClass(PacketLossUnderLoadEngine, [{
    key: "qsParams",
    set: function set(qsParams) {
      _classPrivateFieldGet(this, _loadEngine) && (_classPrivateFieldGet(this, _loadEngine).qsParams = qsParams);
    }
  }, {
    key: "fetchOptions",
    set: function set(fetchOptions) {
      _classPrivateFieldGet(this, _loadEngine) && (_classPrivateFieldGet(this, _loadEngine).fetchOptions = fetchOptions);
    }
  }, {
    key: "onCredentialsFailure",
    set: function set(onCredentialsFailure) {
      var _this2 = this;
      _set(_getPrototypeOf(PacketLossUnderLoadEngine.prototype), "onCredentialsFailure", function () {
        onCredentialsFailure.apply(void 0, arguments);
        _classPrivateFieldGet(_this2, _loadEngine) && _classPrivateFieldGet(_this2, _loadEngine).stop();
      }, this, true);
    }
  }, {
    key: "onConnectionError",
    set: function set(onConnectionError) {
      var _this3 = this;
      _set(_getPrototypeOf(PacketLossUnderLoadEngine.prototype), "onConnectionError", function () {
        onConnectionError.apply(void 0, arguments);
        _classPrivateFieldGet(_this3, _loadEngine) && _classPrivateFieldGet(_this3, _loadEngine).stop();
      }, this, true);
    }
  }, {
    key: "onFinished",
    set: function set(onFinished) {
      var _this4 = this;
      _set(_getPrototypeOf(PacketLossUnderLoadEngine.prototype), "onFinished", function () {
        onFinished.apply(void 0, arguments);
        _classPrivateFieldGet(_this4, _loadEngine) && _classPrivateFieldGet(_this4, _loadEngine).stop();
      }, this, true);
    }
  }]);
  return PacketLossUnderLoadEngine;
}(PacketLossEngine$1);
var PacketLossEngine = PacketLossUnderLoadEngine;
var _excluded$1 = ["reachable"];
var ReachabilityEngine = /*#__PURE__*/_createClass(function ReachabilityEngine(targetUrl) {
  var _this = this;
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$timeout = _ref.timeout,
    timeout = _ref$timeout === void 0 ? -1 : _ref$timeout,
    _ref$fetchOptions = _ref.fetchOptions,
    fetchOptions = _ref$fetchOptions === void 0 ? {} : _ref$fetchOptions;
  _classCallCheck(this, ReachabilityEngine);
  // Public attributes
  _defineProperty(this, "onFinished", function () {});
  var finished = false;
  var finish = function finish(_ref2) {
    var reachable = _ref2.reachable,
      rest = _objectWithoutProperties(_ref2, _excluded$1);
    if (finished) return;
    finished = true;
    _this.onFinished(_objectSpread2({
      targetUrl: targetUrl,
      reachable: reachable
    }, rest));
  };
  fetch(targetUrl, fetchOptions).then(function (response) {
    finish({
      reachable: true,
      response: response
    });
  })["catch"](function (error) {
    finish({
      reachable: false,
      error: error
    });
  });
  timeout > 0 && setTimeout(function () {
    return finish({
      reachable: false,
      error: 'Request timeout'
    });
  }, timeout);
});
var sum = function sum(vals) {
  return vals.reduce(function (agg, val) {
    return agg + val;
  }, 0);
};
var percentile = function percentile(vals) {
  var perc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  if (!vals.length) return 0;
  var sortedVals = vals.slice().sort(function (a, b) {
    return a - b;
  });
  var idx = (vals.length - 1) * perc;
  var rem = idx % 1;
  if (rem === 0) return sortedVals[Math.round(idx)];

  // calculate weighted average
  var edges = [Math.floor, Math.ceil].map(function (rndFn) {
    return sortedVals[rndFn(idx)];
  });
  return edges[0] + (edges[1] - edges[0]) * rem;
};
var _config$3 = /*#__PURE__*/new WeakMap();
var _extractLoadedLatencies = /*#__PURE__*/new WeakMap();
var MeasurementCalculations = /*#__PURE__*/function () {
  function MeasurementCalculations(config) {
    var _this = this;
    _classCallCheck(this, MeasurementCalculations);
    // Public methods
    _defineProperty(this, "getLatencyPoints", function (latencyResults) {
      return latencyResults.timings.map(function (d) {
        return d.ping;
      });
    });
    _defineProperty(this, "getLatency", function (latencyResults) {
      return percentile(_this.getLatencyPoints(latencyResults), _classPrivateFieldGet(_this, _config$3).latencyPercentile);
    });
    _defineProperty(this, "getBandwidthPoints", function (bandwidthResults) {
      return Object.entries(bandwidthResults).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          bytes = _ref2[0],
          timings = _ref2[1].timings;
        return timings.map(function (_ref3) {
          var bps = _ref3.bps,
            duration = _ref3.duration,
            ping = _ref3.ping,
            measTime = _ref3.measTime,
            serverTime = _ref3.serverTime,
            transferSize = _ref3.transferSize;
          return {
            bytes: +bytes,
            bps: bps,
            duration: duration,
            ping: ping,
            measTime: measTime,
            serverTime: serverTime,
            transferSize: transferSize
          };
        });
      }).flat();
    });
    _defineProperty(this, "getBandwidth", function (bandwidthResults) {
      return percentile(_this.getBandwidthPoints(bandwidthResults).filter(function (d) {
        return d.duration >= _classPrivateFieldGet(_this, _config$3).bandwidthMinRequestDuration;
      }).map(function (d) {
        return d.bps;
      }).filter(function (bps) {
        return bps;
      }), _classPrivateFieldGet(_this, _config$3).bandwidthPercentile);
    });
    _defineProperty(this, "getLoadedLatency", function (loadedResults) {
      return _this.getLatency({
        timings: _classPrivateFieldGet(_this, _extractLoadedLatencies).call(_this, loadedResults)
      });
    });
    _defineProperty(this, "getLoadedJitter", function (loadedResults) {
      return _this.getJitter({
        timings: _classPrivateFieldGet(_this, _extractLoadedLatencies).call(_this, loadedResults)
      });
    });
    _defineProperty(this, "getLoadedLatencyPoints", function (loadedResults) {
      return _this.getLatencyPoints({
        timings: _classPrivateFieldGet(_this, _extractLoadedLatencies).call(_this, loadedResults)
      });
    });
    _defineProperty(this, "getPacketLoss", function (plResults) {
      return plResults.packetLoss;
    });
    _defineProperty(this, "getPacketLossDetails", function (plResults) {
      return plResults;
    });
    _defineProperty(this, "getReachability", function (reachabilityResults) {
      return !!reachabilityResults.reachable;
    });
    _defineProperty(this, "getReachabilityDetails", function (d) {
      return {
        host: d.host,
        reachable: d.reachable
      };
    });
    // Internal state
    _classPrivateFieldInitSpec(this, _config$3, {
      writable: true,
      value: void 0
    });
    // Internal methods
    _classPrivateFieldInitSpec(this, _extractLoadedLatencies, {
      writable: true,
      value: function value(loadedResults) {
        return Object.values(loadedResults).filter(
        // keep only file sizes that saturated the connection
        function (d) {
          return d.timings.length && Math.min.apply(Math, _toConsumableArray(d.timings.map(function (d) {
            return d.duration;
          }))) >= _classPrivateFieldGet(_this, _config$3).loadedRequestMinDuration;
        }).map(function (d) {
          return d.sideLatency || [];
        }).flat().slice(-_classPrivateFieldGet(_this, _config$3).loadedLatencyMaxPoints);
      }
    });
    _classPrivateFieldSet(this, _config$3, config);
  }
  _createClass(MeasurementCalculations, [{
    key: "getJitter",
    value: function getJitter(latencyResults) {
      // calc jitter as the average latency delta between consecutive samples
      var pings = this.getLatencyPoints(latencyResults);
      return pings.length < 2 ? null : pings.reduce(function (_ref4, latency) {
        var _ref4$sumDeltas = _ref4.sumDeltas,
          sumDeltas = _ref4$sumDeltas === void 0 ? 0 : _ref4$sumDeltas,
          prevLatency = _ref4.prevLatency;
        return {
          sumDeltas: sumDeltas + (prevLatency !== undefined ? Math.abs(prevLatency - latency) : 0),
          prevLatency: latency
        };
      }, {}).sumDeltas / (pings.length - 1);
    }

    // last measurements are most accurate
  }]);
  return MeasurementCalculations;
}();
var MeasurementCalculations$1 = MeasurementCalculations;
var classificationNames = ['bad', 'poor', 'average', 'good', 'great'];
var customResultTypes = {
  loadedLatencyIncrease: function loadedLatencyIncrease(measurements) {
    return measurements.latency && (measurements.downLoadedLatency || measurements.upLoadedLatency) ? Math.max(measurements.downLoadedLatency, measurements.upLoadedLatency) - measurements.latency : undefined;
  }
};
var defaultPoints = {
  packetLoss: 0
};
var _config$2 = /*#__PURE__*/new WeakMap();
var ScoresCalculations = /*#__PURE__*/function () {
  function ScoresCalculations(config) {
    _classCallCheck(this, ScoresCalculations);
    // Internal state
    _classPrivateFieldInitSpec(this, _config$2, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _config$2, config);
  }
  _createClass(ScoresCalculations, [{
    key: "getScores",
    value: function getScores(measurements) {
      var scores = Object.assign.apply(Object, _toConsumableArray(Object.entries(_classPrivateFieldGet(this, _config$2).aimMeasurementScoring).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          type = _ref2[0],
          fn = _ref2[1];
        var val = customResultTypes.hasOwnProperty(type) ? customResultTypes[type](measurements) : measurements[type];
        return val === undefined ? defaultPoints.hasOwnProperty(type) ? _defineProperty({}, type, defaultPoints[type]) : {} : _defineProperty({}, type, val === undefined ? 0 : +fn(val));
      })));
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(_classPrivateFieldGet(this, _config$2).aimExperiencesDefs).filter(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          input = _ref6[1].input;
        return input.every(function (k) {
          return scores.hasOwnProperty(k);
        });
      }).map(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
          k = _ref8[0],
          _ref8$ = _ref8[1],
          input = _ref8$.input,
          pointThresholds = _ref8$.pointThresholds;
        var sumPoints = Math.max(0, sum(input.map(function (k) {
          return scores[k];
        })));
        var classificationIdx = (0,_d3_scale_js__WEBPACK_IMPORTED_MODULE_0__.scaleThreshold)(pointThresholds, [0, 1, 2, 3, 4])(sumPoints);
        var classificationName = classificationNames[classificationIdx];
        return _defineProperty({}, k, {
          points: sumPoints,
          classificationIdx: classificationIdx,
          classificationName: classificationName
        });
      }))));
    }
  }]);
  return ScoresCalculations;
}();
var ScoresCalculations$1 = ScoresCalculations;
var _config$1 = /*#__PURE__*/new WeakMap();
var _measCalc = /*#__PURE__*/new WeakMap();
var _scoresCalc = /*#__PURE__*/new WeakMap();
var _calcGetter = /*#__PURE__*/new WeakMap();
var _getV4Reachability = /*#__PURE__*/new WeakMap();
var _getV4ReachabilityDetails = /*#__PURE__*/new WeakMap();
var _getV6Reachability = /*#__PURE__*/new WeakMap();
var _getV6ReachabilityDetails = /*#__PURE__*/new WeakMap();
var Results = /*#__PURE__*/function () {
  function Results(config) {
    var _this = this;
    _classCallCheck(this, Results);
    // Public attributes
    _defineProperty(this, "raw", void 0);
    _defineProperty(this, "getUnloadedLatency", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLatency', 'latency');
    });
    _defineProperty(this, "getUnloadedJitter", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getJitter', 'latency');
    });
    _defineProperty(this, "getUnloadedLatencyPoints", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLatencyPoints', 'latency', []);
    });
    _defineProperty(this, "getDownLoadedLatency", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLoadedLatency', 'download');
    });
    _defineProperty(this, "getDownLoadedJitter", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLoadedJitter', 'download');
    });
    _defineProperty(this, "getDownLoadedLatencyPoints", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLoadedLatencyPoints', 'download', []);
    });
    _defineProperty(this, "getUpLoadedLatency", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLoadedLatency', 'upload');
    });
    _defineProperty(this, "getUpLoadedJitter", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLoadedJitter', 'upload');
    });
    _defineProperty(this, "getUpLoadedLatencyPoints", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getLoadedLatencyPoints', 'upload', []);
    });
    _defineProperty(this, "getDownloadBandwidth", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getBandwidth', 'download');
    });
    _defineProperty(this, "getDownloadBandwidthPoints", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getBandwidthPoints', 'download', []);
    });
    _defineProperty(this, "getUploadBandwidth", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getBandwidth', 'upload');
    });
    _defineProperty(this, "getUploadBandwidthPoints", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getBandwidthPoints', 'upload', []);
    });
    _defineProperty(this, "getPacketLoss", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getPacketLoss', 'packetLoss');
    });
    _defineProperty(this, "getPacketLossDetails", function () {
      return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getPacketLossDetails', 'packetLoss', undefined, true);
    });
    _defineProperty(this, "getScores", function () {
      return _classPrivateFieldGet(_this, _scoresCalc).getScores(_this.getSummary());
    });
    // Internal state
    _classPrivateFieldInitSpec(this, _config$1, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _measCalc, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _scoresCalc, {
      writable: true,
      value: void 0
    });
    // Internal methods
    _classPrivateFieldInitSpec(this, _calcGetter, {
      writable: true,
      value: function value(calcFn, resKey) {
        var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var surfaceError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        return !_this.raw.hasOwnProperty(resKey) || !_this.raw[resKey].started ? defaultVal : surfaceError && _this.raw[resKey].error ? {
          error: _this.raw[resKey].error
        } : _classPrivateFieldGet(_this, _measCalc)[calcFn](_this.raw[resKey].results);
      }
    });
    _classPrivateFieldInitSpec(this, _getV4Reachability, {
      writable: true,
      value: function value() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getReachability', 'v4Reachability');
      }
    });
    _classPrivateFieldInitSpec(this, _getV4ReachabilityDetails, {
      writable: true,
      value: function value() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getReachabilityDetails', 'v4Reachability');
      }
    });
    _classPrivateFieldInitSpec(this, _getV6Reachability, {
      writable: true,
      value: function value() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getReachability', 'v6Reachability');
      }
    });
    _classPrivateFieldInitSpec(this, _getV6ReachabilityDetails, {
      writable: true,
      value: function value() {
        return _classPrivateFieldGet(_this, _calcGetter).call(_this, 'getReachabilityDetails', 'v6Reachability');
      }
    });
    _classPrivateFieldSet(this, _config$1, config);
    this.clear();
    _classPrivateFieldSet(this, _measCalc, new MeasurementCalculations$1(_classPrivateFieldGet(this, _config$1)));
    _classPrivateFieldSet(this, _scoresCalc, new ScoresCalculations$1(_classPrivateFieldGet(this, _config$1)));
  }
  _createClass(Results, [{
    key: "isFinished",
    get: function get() {
      return Object.values(this.raw).every(function (d) {
        return d.finished;
      });
    }

    // Public methods
  }, {
    key: "clear",
    value: function clear() {
      this.raw = Object.assign.apply(Object, [{}].concat(_toConsumableArray(_toConsumableArray(new Set(_classPrivateFieldGet(this, _config$1).measurements.map(function (m) {
        return m.type;
      }))).map(function (m) {
        return _defineProperty({}, m, {
          started: false,
          finished: false,
          results: {}
        });
      }))));
    }
  }, {
    key: "getSummary",
    value: function getSummary() {
      var items = {
        download: this.getDownloadBandwidth,
        upload: this.getUploadBandwidth,
        latency: this.getUnloadedLatency,
        jitter: this.getUnloadedJitter,
        downLoadedLatency: this.getDownLoadedLatency,
        downLoadedJitter: this.getDownLoadedJitter,
        upLoadedLatency: this.getUpLoadedLatency,
        upLoadedJitter: this.getUpLoadedJitter,
        packetLoss: this.getPacketLoss,
        v4Reachability: _classPrivateFieldGet(this, _getV4Reachability),
        v6Reachability: _classPrivateFieldGet(this, _getV6Reachability)
      };
      return Object.assign.apply(Object, _toConsumableArray(Object.entries(items).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          fn = _ref3[1];
        var val = fn();
        return val === undefined ? {} : _defineProperty({}, key, val);
      })));
    }
  }]);
  return Results;
}();
var Results$1 = Results;
var round = function round(num) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return !num ? num : Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
var latencyPointsParser = function latencyPointsParser(durations) {
  return durations.map(function (d) {
    return round(d, 2);
  });
};
var bpsPointsParser = function bpsPointsParser(pnts) {
  return pnts.map(function (d) {
    return {
      bytes: +d.bytes,
      bps: round(d.bps)
    };
  });
};
var packetLossParser = function packetLossParser(d) {
  return d.error ? undefined : {
    numMessages: d.numMessagesSent,
    lossRatio: round(d.packetLoss, 4)
  };
};
var resultsParsers = {
  latencyMs: ['getUnloadedLatencyPoints', latencyPointsParser],
  download: ['getDownloadBandwidthPoints', bpsPointsParser],
  upload: ['getUploadBandwidthPoints', bpsPointsParser],
  downLoadedLatencyMs: ['getDownLoadedLatencyPoints', latencyPointsParser],
  upLoadedLatencyMs: ['getUpLoadedLatencyPoints', latencyPointsParser],
  packetLoss: ['getPacketLossDetails', packetLossParser]
  // v4Reachability: ['getV4ReachabilityDetails'],
  // v6Reachability: ['getV6ReachabilityDetails']
};
var scoreParser = function scoreParser(d) {
  return {
    points: d.points,
    classification: d.classificationName
  };
};
var logAimResults = function logAimResults(results, _ref) {
  var apiUrl = _ref.apiUrl;
  var logData = {};
  Object.entries(resultsParsers).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      logK = _ref3[0],
      _ref3$ = _slicedToArray(_ref3[1], 2),
      fn = _ref3$[0],
      _ref3$$ = _ref3$[1],
      parser = _ref3$$ === void 0 ? function (d) {
        return d;
      } : _ref3$$;
    var val = results[fn]();
    val && (logData[logK] = parser(val));
  });
  var scores = results.getScores();
  scores && (logData.scores = Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(scores).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      k = _ref5[0],
      score = _ref5[1];
    return _defineProperty({}, k, scoreParser(score));
  })))));
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(logData)
  });
};
var logFinalResults = logAimResults;
var _excluded = ["type"],
  _excluded2 = ["numPackets"],
  _excluded3 = ["bytes"];
var DEFAULT_OPTIMAL_DOWNLOAD_SIZE = 1e6;
var DEFAULT_OPTIMAL_UPLOAD_SIZE = 1e6;
var OPTIMAL_SIZE_RATIO = 0.5; // of largest size reached in measurement

var pausableTypes = ['latency', 'latencyUnderLoad', 'download', 'upload'];
var genMeasId = function genMeasId() {
  return "".concat(Math.round(Math.random() * 1e16));
};
var _onFinish = /*#__PURE__*/new WeakMap();
var _onError = /*#__PURE__*/new WeakMap();
var _config = /*#__PURE__*/new WeakMap();
var _results = /*#__PURE__*/new WeakMap();
var _measurementId = /*#__PURE__*/new WeakMap();
var _curMsmIdx = /*#__PURE__*/new WeakMap();
var _curEngine = /*#__PURE__*/new WeakMap();
var _optimalDownloadChunkSize = /*#__PURE__*/new WeakMap();
var _optimalUploadChunkSize = /*#__PURE__*/new WeakMap();
var _running = /*#__PURE__*/new WeakMap();
var _finished = /*#__PURE__*/new WeakMap();
var _setRunning = /*#__PURE__*/new WeakSet();
var _setFinished = /*#__PURE__*/new WeakSet();
var _curType = /*#__PURE__*/new WeakSet();
var _curTypeResults = /*#__PURE__*/new WeakSet();
var _clear = /*#__PURE__*/new WeakSet();
var _destroyCurEngine = /*#__PURE__*/new WeakSet();
var _next = /*#__PURE__*/new WeakSet();
var MeasurementEngine = /*#__PURE__*/function () {
  function MeasurementEngine() {
    var userConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MeasurementEngine);
    _classPrivateMethodInitSpec(this, _next);
    _classPrivateMethodInitSpec(this, _destroyCurEngine);
    _classPrivateMethodInitSpec(this, _clear);
    _classPrivateMethodInitSpec(this, _curTypeResults);
    _classPrivateMethodInitSpec(this, _curType);
    _classPrivateMethodInitSpec(this, _setFinished);
    // Internal methods
    _classPrivateMethodInitSpec(this, _setRunning);
    _defineProperty(this, "onRunningChange", function () {});
    _defineProperty(this, "onResultsChange", function () {});
    _classPrivateFieldInitSpec(this, _onFinish, {
      writable: true,
      value: function value() {}
    });
    _classPrivateFieldInitSpec(this, _onError, {
      writable: true,
      value: function value() {}
    });
    // Internal state
    _classPrivateFieldInitSpec(this, _config, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _results, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _measurementId, {
      writable: true,
      value: genMeasId()
    });
    _classPrivateFieldInitSpec(this, _curMsmIdx, {
      writable: true,
      value: -1
    });
    _classPrivateFieldInitSpec(this, _curEngine, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _optimalDownloadChunkSize, {
      writable: true,
      value: DEFAULT_OPTIMAL_DOWNLOAD_SIZE
    });
    _classPrivateFieldInitSpec(this, _optimalUploadChunkSize, {
      writable: true,
      value: DEFAULT_OPTIMAL_UPLOAD_SIZE
    });
    _classPrivateFieldInitSpec(this, _running, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _finished, {
      writable: true,
      value: false
    });
    _classPrivateFieldSet(this, _config, Object.assign({}, defaultConfig, userConfig, internalConfig));
    _classPrivateFieldSet(this, _results, new Results$1(_classPrivateFieldGet(this, _config)));
    _classPrivateFieldGet(this, _config).autoStart && this.play();
  }

  // Public attributes
  _createClass(MeasurementEngine, [{
    key: "results",
    get: function get() {
      // read access to results
      return _classPrivateFieldGet(this, _results);
    }
  }, {
    key: "isRunning",
    get: function get() {
      return _classPrivateFieldGet(this, _running);
    }
  }, {
    key: "isFinished",
    get: function get() {
      return _classPrivateFieldGet(this, _finished);
    }
  }, {
    key: "onFinish",
    set:
    // callback invoked when all the measurements are finished
    function set(f) {
      _classPrivateFieldSet(this, _onFinish, f);
    }
  }, {
    key: "onError",
    set:
    // callback invoked if an error occurs during measurement
    function set(f) {
      _classPrivateFieldSet(this, _onError, f);
    }

    // Public methods
  }, {
    key: "pause",
    value: function pause() {
      pausableTypes.includes(_classPrivateMethodGet(this, _curType, _curType2).call(this)) && _classPrivateFieldGet(this, _curEngine).pause();
      _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, false);
    }
  }, {
    key: "play",
    value: function play() {
      if (!_classPrivateFieldGet(this, _running)) {
        _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, true);
        _classPrivateMethodGet(this, _next, _next2).call(this);
      }
    }
  }, {
    key: "restart",
    value: function restart() {
      _classPrivateMethodGet(this, _clear, _clear2).call(this);
      this.play();
    }
  }]);
  return MeasurementEngine;
}();
function _setRunning2(running) {
  if (running !== _classPrivateFieldGet(this, _running)) {
    _classPrivateFieldSet(this, _running, running);
    this.onRunningChange(_classPrivateFieldGet(this, _running));
  }
}
function _setFinished2(finished) {
  var _this3 = this;
  if (finished !== _classPrivateFieldGet(this, _finished)) {
    _classPrivateFieldSet(this, _finished, finished);
    finished && setTimeout(function () {
      return _classPrivateFieldGet(_this3, _onFinish).call(_this3, _this3.results);
    });
  }
}
function _curType2() {
  return _classPrivateFieldGet(this, _curMsmIdx) < 0 || _classPrivateFieldGet(this, _curMsmIdx) >= _classPrivateFieldGet(this, _config).measurements.length ? null : _classPrivateFieldGet(this, _config).measurements[_classPrivateFieldGet(this, _curMsmIdx)].type;
}
function _curTypeResults2() {
  return _classPrivateFieldGet(this, _results).raw[_classPrivateMethodGet(this, _curType, _curType2).call(this)] || undefined;
}
function _clear2() {
  _classPrivateMethodGet(this, _destroyCurEngine, _destroyCurEngine2).call(this);
  _classPrivateFieldSet(this, _measurementId, genMeasId());
  _classPrivateFieldSet(this, _curMsmIdx, -1);
  _classPrivateFieldSet(this, _curEngine, undefined);
  _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, false);
  _classPrivateMethodGet(this, _setFinished, _setFinished2).call(this, false);
  _classPrivateFieldGet(this, _results).clear();
}
function _destroyCurEngine2() {
  var engine = _classPrivateFieldGet(this, _curEngine);
  if (!engine) return;
  engine.onFinished = engine.onConnectionError = engine.onFail = engine.onMsgReceived = engine.onCredentialsFailure = engine.onMeasurementResult = function () {};
  pausableTypes.includes(_classPrivateMethodGet(this, _curType, _curType2).call(this)) && engine.pause();
}
function _next2() {
  var _this4 = this;
  var _this$curMsmIdx;
  if (pausableTypes.includes(_classPrivateMethodGet(this, _curType, _curType2).call(this)) && _classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this) && _classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).started && !_classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).finished && !_classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).finishedCurrentRound && !_classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this).error) {
    _classPrivateFieldGet(this, _curEngine).play();
    return;
  }

  // advance to next msm
  _classPrivateFieldSet(this, _curMsmIdx, (_this$curMsmIdx = _classPrivateFieldGet(this, _curMsmIdx), _this$curMsmIdx++, _this$curMsmIdx));
  if (_classPrivateFieldGet(this, _curMsmIdx) >= _classPrivateFieldGet(this, _config).measurements.length) {
    // done with measurements
    _classPrivateMethodGet(this, _setRunning, _setRunning2).call(this, false);
    _classPrivateMethodGet(this, _setFinished, _setFinished2).call(this, true);
    return;
  }
  var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _config).measurements[_classPrivateFieldGet(this, _curMsmIdx)],
    type = _classPrivateFieldGet2.type,
    msmConfig = _objectWithoutProperties(_classPrivateFieldGet2, _excluded);
  var msmResults = _classPrivateMethodGet(this, _curTypeResults, _curTypeResults2).call(this);
  var _classPrivateFieldGet3 = _classPrivateFieldGet(this, _config),
    downloadApiUrl = _classPrivateFieldGet3.downloadApiUrl,
    uploadApiUrl = _classPrivateFieldGet3.uploadApiUrl,
    estimatedServerTime = _classPrivateFieldGet3.estimatedServerTime;
  var engine;
  switch (type) {
    case 'v4Reachability':
    case 'v6Reachability':
      engine = new ReachabilityEngine("https://".concat(msmConfig.host), {
        fetchOptions: {
          method: 'GET',
          mode: 'no-cors'
        }
      });
      engine.onFinished = function (result) {
        msmResults.finished = true;
        msmResults.results = _objectSpread2({
          host: msmConfig.host
        }, result);
        _this4.onResultsChange({
          type: type
        });
        _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
      };
      break;
    case 'rpki':
      engine = new ReachabilityEngine("https://".concat(_classPrivateFieldGet(this, _config).rpkiInvalidHost), {
        timeout: 5000
      });
      engine.onFinished = function (result) {
        (result.response ? result.response.json() : Promise.resolve()).then(function (response) {
          msmResults.finished = true;
          msmResults.results = _objectSpread2({
            host: _classPrivateFieldGet(_this4, _config).rpkiInvalidHost,
            filteringInvalids: !result.reachable
          }, response ? {
            asn: response.asn,
            name: response.name
          } : {});
          _this4.onResultsChange({
            type: type
          });
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        });
      };
      break;
    case 'nxdomain':
      engine = new ReachabilityEngine("https://".concat(msmConfig.nxhost), {
        fetchOptions: {
          mode: 'no-cors'
        }
      });
      engine.onFinished = function (result) {
        msmResults.finished = true;
        msmResults.results = {
          host: msmConfig.nxhost,
          reachable: result.reachable
        };
        _this4.onResultsChange({
          type: type
        });
        _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
      };
      break;
    case 'packetLoss':
    case 'packetLossUnderLoad':
      {
        msmResults.finished = false;
        var numMsgs = msmConfig.numPackets,
          ptCfg = _objectWithoutProperties(msmConfig, _excluded2);
        var _classPrivateFieldGet4 = _classPrivateFieldGet(this, _config),
          turnServerUri = _classPrivateFieldGet4.turnServerUri,
          turnServerCredsApi = _classPrivateFieldGet4.turnServerCredsApiUrl,
          turnServerUser = _classPrivateFieldGet4.turnServerUser,
          turnServerPass = _classPrivateFieldGet4.turnServerPass,
          includeCredentials = _classPrivateFieldGet4.includeCredentials;
        engine = new PacketLossEngine(_objectSpread2({
          turnServerUri: turnServerUri,
          turnServerCredsApi: turnServerCredsApi,
          turnServerCredsApiIncludeCredentials: includeCredentials,
          turnServerUser: turnServerUser,
          turnServerPass: turnServerPass,
          numMsgs: numMsgs,
          // if under load
          downloadChunkSize: msmConfig.loadDown ? _classPrivateFieldGet(this, _optimalDownloadChunkSize) : undefined,
          uploadChunkSize: msmConfig.loadUp ? _classPrivateFieldGet(this, _optimalUploadChunkSize) : undefined,
          downloadApiUrl: downloadApiUrl,
          uploadApiUrl: uploadApiUrl
        }, ptCfg));
      }
      engine.onMsgReceived = function () {
        msmResults.results = Object.assign({}, engine.results);
        _this4.onResultsChange({
          type: type
        });
      };
      engine.onFinished = function () {
        msmResults.finished = true;
        _this4.onResultsChange({
          type: type
        });
        _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
      };
      engine.onConnectionError = function (e) {
        msmResults.error = e;
        _this4.onResultsChange({
          type: type
        });
        _classPrivateFieldGet(_this4, _onError).call(_this4, "Connection error while measuring packet loss: ".concat(e));
        _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
      };
      engine.onCredentialsFailure = function () {
        msmResults.error = 'unable to get turn server credentials';
        _this4.onResultsChange({
          type: type
        });
        _classPrivateFieldGet(_this4, _onError).call(_this4, 'Error while measuring packet loss: unable to get turn server credentials.');
        _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
      };
      break;
    case 'latency':
    case 'latencyUnderLoad':
      msmResults.finished = false;
      engine = new BandwidthEngine([{
        dir: 'down',
        bytes: 0,
        count: msmConfig.numPackets,
        bypassMinDuration: true
      }], {
        downloadApiUrl: downloadApiUrl,
        uploadApiUrl: uploadApiUrl,
        estimatedServerTime: estimatedServerTime,
        logApiUrl: _classPrivateFieldGet(this, _config).logMeasurementApiUrl,
        measurementId: _classPrivateFieldGet(this, _measurementId),
        // if under load
        downloadChunkSize: msmConfig.loadDown ? _classPrivateFieldGet(this, _optimalDownloadChunkSize) : undefined,
        uploadChunkSize: msmConfig.loadUp ? _classPrivateFieldGet(this, _optimalUploadChunkSize) : undefined
      });
      engine.fetchOptions = {
        credentials: _classPrivateFieldGet(this, _config).includeCredentials ? 'include' : undefined
      };
      engine.onMeasurementResult = engine.onNewMeasurementStarted = function (meas, results) {
        msmResults.results = Object.assign({}, results.down[0]);
        _this4.onResultsChange({
          type: type
        });
      };
      engine.onFinished = function () {
        msmResults.finished = true;
        _this4.onResultsChange({
          type: type
        });
        _classPrivateFieldGet(_this4, _running) && _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
      };
      engine.onConnectionError = function (e) {
        msmResults.error = e;
        _this4.onResultsChange({
          type: type
        });
        _classPrivateFieldGet(_this4, _onError).call(_this4, "Connection error while measuring latency: ".concat(e));
        _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
      };
      engine.play();
      break;
    case 'download':
    case 'upload':
      if (msmResults.finished || msmResults.error) {
        _classPrivateMethodGet(this, _next, _next2).call(this); // skip, already concluded this bandwidth measurement type
      } else {
        delete msmResults.finishedCurrentRound;
        var measureParallelLatency = _classPrivateFieldGet(this, _config)["measure".concat(type === 'download' ? 'Down' : 'Up', "loadLoadedLatency")];
        engine = new BandwidthEngine([_objectSpread2({
          dir: type === 'download' ? 'down' : 'up'
        }, msmConfig)], {
          downloadApiUrl: downloadApiUrl,
          uploadApiUrl: uploadApiUrl,
          estimatedServerTime: estimatedServerTime,
          logApiUrl: _classPrivateFieldGet(this, _config).logMeasurementApiUrl,
          measurementId: _classPrivateFieldGet(this, _measurementId),
          measureParallelLatency: measureParallelLatency,
          parallelLatencyThrottleMs: _classPrivateFieldGet(this, _config).loadedLatencyThrottle
        });
        engine.fetchOptions = {
          credentials: _classPrivateFieldGet(this, _config).includeCredentials ? 'include' : undefined
        };
        engine.finishRequestDuration = _classPrivateFieldGet(this, _config).bandwidthFinishRequestDuration;
        engine.onNewMeasurementStarted = function (_ref) {
          var count = _ref.count,
            bytes = _ref.bytes;
          var res = msmResults.results = Object.assign({}, msmResults.results);
          !res.hasOwnProperty(bytes) && (res[bytes] = {
            timings: [],
            numMeasurements: 0,
            sideLatency: measureParallelLatency ? [] : undefined
          });

          // check if count hasn't already been added
          if (res[bytes].numMeasurements - res[bytes].timings.length !== count) {
            res[bytes].numMeasurements += count;
            _this4.onResultsChange({
              type: type
            });
          }
        };
        engine.onMeasurementResult = function (_ref2) {
          var bytes = _ref2.bytes,
            timing = _objectWithoutProperties(_ref2, _excluded3);
          // merge in new result
          msmResults.results[bytes].timings.push(timing);
          msmResults.results = Object.assign({}, msmResults.results);
          _this4.onResultsChange({
            type: type
          });
        };
        engine.onParallelLatencyResult = function (res) {
          // merge in new latency result
          msmResults.results[msmConfig.bytes].sideLatency.push(res);
          msmResults.results = Object.assign({}, msmResults.results);
          _this4.onResultsChange({
            type: type
          });
        };
        engine.onFinished = function (results) {
          var isLastMsmOfType = !_classPrivateFieldGet(_this4, _config).measurements.slice(_classPrivateFieldGet(_this4, _curMsmIdx) + 1).map(function (d) {
            return d.type;
          }).includes(type);
          var minDuration = Math.min.apply(Math, _toConsumableArray(Object.values(type === 'download' ? results.down : results.up).slice(-1)[0].timings.map(function (d) {
            return d.duration;
          })));
          var reachedEndOfMsmType = isLastMsmOfType || !msmConfig.bypassMinDuration && minDuration > _classPrivateFieldGet(_this4, _config).bandwidthFinishRequestDuration;
          if (!reachedEndOfMsmType) {
            msmResults.finishedCurrentRound = true;
          } else {
            msmResults.finished = true;
            _this4.onResultsChange({
              type: type
            });

            // record optimal load size
            var largestSize = Object.keys(msmResults.results).map(function (n) {
              return +n;
            }).sort(function (a, b) {
              return b - a;
            })[0];
            var optimalSize = largestSize * OPTIMAL_SIZE_RATIO;
            type === 'download' && _classPrivateFieldSet(_this4, _optimalDownloadChunkSize, optimalSize);
            type === 'upload' && _classPrivateFieldSet(_this4, _optimalUploadChunkSize, optimalSize);
          }
          _classPrivateFieldGet(_this4, _running) && _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        engine.onConnectionError = function (e) {
          msmResults.error = e;
          _this4.onResultsChange({
            type: type
          });
          _classPrivateFieldGet(_this4, _onError).call(_this4, "Connection error while measuring ".concat(type, ": ").concat(e));
          _classPrivateMethodGet(_this4, _next, _next2).call(_this4);
        };
        engine.play();
      }
      break;
  }
  _classPrivateFieldSet(this, _curEngine, engine);
  msmResults.started = true;
  this.onResultsChange({
    type: type
  });
}
var _logAimApiUrl = /*#__PURE__*/new WeakMap();
var _logFinalResults = /*#__PURE__*/new WeakMap();
var LoggingMeasurementEngine = /*#__PURE__*/function (_MeasurementEngine) {
  _inherits(LoggingMeasurementEngine, _MeasurementEngine);
  var _super = _createSuper(LoggingMeasurementEngine);
  function LoggingMeasurementEngine(userConfig) {
    var _thisSuper, _this;
    _classCallCheck(this, LoggingMeasurementEngine);
    for (var _len = arguments.length, pt = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pt[_key - 1] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this, userConfig].concat(pt));
    // Internal state
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _logAimApiUrl, {
      writable: true,
      value: void 0
    });
    // Internal methods
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _logFinalResults, {
      writable: true,
      value: function value(results) {
        _classPrivateFieldGet(_assertThisInitialized(_this), _logAimApiUrl) && logFinalResults(results, {
          apiUrl: _classPrivateFieldGet(_assertThisInitialized(_this), _logAimApiUrl)
        });
      }
    });
    _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(LoggingMeasurementEngine.prototype)), "onFinish", _classPrivateFieldGet(_assertThisInitialized(_this), _logFinalResults), _thisSuper, true);
    _classPrivateFieldSet(_assertThisInitialized(_this), _logAimApiUrl, Object.assign({}, defaultConfig, userConfig, internalConfig).logAimApiUrl);
    return _this;
  }

  // Public attributes
  _createClass(LoggingMeasurementEngine, [{
    key: "onFinish",
    set: function set(onFinish) {
      var _this2 = this;
      _set(_getPrototypeOf(LoggingMeasurementEngine.prototype), "onFinish", function (results) {
        onFinish(results);
        _classPrivateFieldGet(_this2, _logFinalResults).call(_this2, results);
      }, this, true);
    }
  }]);
  return LoggingMeasurementEngine;
}(MeasurementEngine);


/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cache: () => (/* binding */ Cache),
/* harmony export */   __moduleExports: () => (/* binding */ lodash_memoize),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var FUNC_ERROR_TEXT = "Expected a function";
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var funcTag = "[object Function]",
  genTag = "[object GeneratorFunction]";
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var freeGlobal = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e) {}
  }
  return result;
}
var arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype;
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var splice = arrayProto.splice;
var Map = getNative(root, "Map"),
  nativeCreate = getNative(Object, "create");
function Hash(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : void 0;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map || ListCache)(),
    string: new Hash()
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)["delete"](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
function isKeyable(value) {
  var type = _typeof(value);
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + "";
    } catch (e) {}
  }
  return "";
}
function memoize(func, resolver) {
  if (typeof func != "function" || resolver && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : "";
  return tag == funcTag || tag == genTag;
}
function isObject(value) {
  var type = _typeof(value);
  return !!value && (type == "object" || type == "function");
}
var lodash_memoize = memoize;
var Cache = lodash_memoize.Cache;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lodash_memoize);


/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   scaleBand: () => (/* binding */ band),
/* harmony export */   scaleDiverging: () => (/* binding */ diverging),
/* harmony export */   scaleDivergingLog: () => (/* binding */ divergingLog),
/* harmony export */   scaleDivergingPow: () => (/* binding */ divergingPow),
/* harmony export */   scaleDivergingSqrt: () => (/* binding */ divergingSqrt),
/* harmony export */   scaleDivergingSymlog: () => (/* binding */ divergingSymlog),
/* harmony export */   scaleIdentity: () => (/* binding */ identity$1),
/* harmony export */   scaleImplicit: () => (/* binding */ implicit),
/* harmony export */   scaleLinear: () => (/* binding */ linear),
/* harmony export */   scaleLog: () => (/* binding */ log),
/* harmony export */   scaleOrdinal: () => (/* binding */ ordinal),
/* harmony export */   scalePoint: () => (/* binding */ point),
/* harmony export */   scalePow: () => (/* binding */ pow),
/* harmony export */   scaleQuantile: () => (/* binding */ quantile),
/* harmony export */   scaleQuantize: () => (/* binding */ quantize),
/* harmony export */   scaleRadial: () => (/* binding */ radial),
/* harmony export */   scaleSequential: () => (/* binding */ sequential),
/* harmony export */   scaleSequentialLog: () => (/* binding */ sequentialLog),
/* harmony export */   scaleSequentialPow: () => (/* binding */ sequentialPow),
/* harmony export */   scaleSequentialQuantile: () => (/* binding */ sequentialQuantile),
/* harmony export */   scaleSequentialSqrt: () => (/* binding */ sequentialSqrt),
/* harmony export */   scaleSequentialSymlog: () => (/* binding */ sequentialSymlog),
/* harmony export */   scaleSqrt: () => (/* binding */ sqrt),
/* harmony export */   scaleSymlog: () => (/* binding */ symlog),
/* harmony export */   scaleThreshold: () => (/* binding */ threshold),
/* harmony export */   scaleTime: () => (/* binding */ time),
/* harmony export */   scaleUtc: () => (/* binding */ utcTime),
/* harmony export */   tickFormat: () => (/* binding */ tickFormat)
/* harmony export */ });
/* harmony import */ var _d3_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _d3_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _d3_format_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _d3_time_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _d3_time_format_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      {
        if (typeof domain === "function") this.interpolator(domain);else this.range(domain);
        break;
      }
    default:
      {
        this.domain(domain);
        if (typeof interpolator === "function") this.interpolator(interpolator);else this.range(interpolator);
        break;
      }
  }
  return this;
}
var implicit = Symbol("implicit");
function ordinal() {
  var index = new _d3_array_js__WEBPACK_IMPORTED_MODULE_0__.InternMap(),
    domain = [],
    range2 = [],
    unknown = implicit;
  function scale(d) {
    var i = index.get(d);
    if (i === void 0) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range2[i % range2.length];
  }
  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new _d3_array_js__WEBPACK_IMPORTED_MODULE_0__.InternMap();
    var _iterator = _createForOfIteratorHelper(_),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        if (index.has(value)) continue;
        index.set(value, domain.push(value) - 1);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return scale;
  };
  scale.range = function (_) {
    return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function () {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}
function band() {
  var scale = ordinal().unknown(void 0),
    domain = scale.domain,
    ordinalRange = scale.range,
    r0 = 0,
    r1 = 1,
    step,
    bandwidth,
    round = false,
    paddingInner = 0,
    paddingOuter = 0,
    align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length,
      reverse = r1 < r0,
      start = reverse ? r1 : r0,
      stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.range)(n).map(function (i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function (_) {
    var _ref;
    return arguments.length ? ((_ref = _slicedToArray(_, 2), r0 = _ref[0], r1 = _ref[1]), r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function (_) {
    var _ref2;
    return (_ref2 = _slicedToArray(_, 2), r0 = _ref2[0], r1 = _ref2[1]), r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function () {
    return bandwidth;
  };
  scale.step = function () {
    return step;
  };
  scale.round = function (_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function (_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function (_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function () {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy2 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function () {
    return pointish(copy2());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}
function constants(x) {
  return function () {
    return x;
  };
}
function number(x) {
  return +x;
}
var unit = [0, 1];
function identity(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function (x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function (x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range2, interpolate2) {
  var d0 = domain[0],
    d1 = domain[1],
    r0 = range2[0],
    r1 = range2[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function (x) {
    return r0(d0(x));
  };
}
function polymap(domain, range2, interpolate2) {
  var j = Math.min(domain.length, range2.length) - 1,
    d = new Array(j),
    r = new Array(j),
    i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range2[i], range2[i + 1]);
  }
  return function (x) {
    var i2 = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.bisect)(domain, x, 1, j) - 1;
    return r[i2](d[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit,
    range2 = unit,
    interpolate$1 = _d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.interpolate,
    transform,
    untransform,
    unknown,
    clamp = identity,
    piecewise2,
    output,
    input;
  function rescale() {
    var n = Math.min(domain.length, range2.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise2(domain.map(transform), range2, interpolate$1)))(transform(clamp(x)));
  }
  scale.invert = function (y) {
    return clamp(untransform((input || (input = piecewise2(range2, domain.map(transform), _d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.interpolateNumber)))(y)));
  };
  scale.domain = function (_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function (_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function (_) {
    return range2 = Array.from(_), interpolate$1 = _d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.interpolateRound, rescale();
  };
  scale.clamp = function (_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };
  scale.interpolate = function (_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function (t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}
function tickFormat(start, stop, count, specifier) {
  var step = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.tickStep)(start, stop, count),
    precision;
  specifier = (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.formatSpecifier)(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s":
      {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.precisionPrefix)(step, value))) specifier.precision = precision;
        return (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.formatPrefix)(specifier, value);
      }
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      {
        if (specifier.precision == null && !isNaN(precision = (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.precisionRound)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
    case "f":
    case "%":
      {
        if (specifier.precision == null && !isNaN(precision = (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.precisionFixed)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
  }
  return (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.format)(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function (count) {
    var d = domain();
    return (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function (count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function (count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.tickIncrement)(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function () {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function identity$1(domain) {
  var unknown;
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : x;
  }
  scale.invert = scale;
  scale.domain = scale.range = function (_) {
    return arguments.length ? (domain = Array.from(_, number), scale) : domain.slice();
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function () {
    return identity$1(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number) : [0, 1];
  return linearish(scale);
}
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0,
    i1 = domain.length - 1,
    x0 = domain[i0],
    x1 = domain[i1],
    t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}
function transformLog(x) {
  return Math.log(x);
}
function transformExp(x) {
  return Math.exp(x);
}
function transformLogn(x) {
  return -Math.log(-x);
}
function transformExpn(x) {
  return -Math.exp(-x);
}
function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function (x) {
    return Math.pow(base, x);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function (x) {
    return Math.log(x) / base;
  });
}
function reflect(f) {
  return function (x, k) {
    return -f(-x, k);
  };
}
function loggish(transform) {
  var scale = transform(transformLog, transformExp);
  var domain = scale.domain;
  var base = 10;
  var logs;
  var pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function (_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = function (count) {
    var d = domain();
    var u = d[0];
    var v = d[d.length - 1];
    var r = v < u;
    if (r) {
      var _ref3 = [v, u];
      u = _ref3[0];
      v = _ref3[1];
    }
    var i = logs(u);
    var j = logs(v);
    var k;
    var t;
    var n = count == null ? 10 : +count;
    var z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1; k < base; ++k) {
          t = i < 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1; k >= 1; --k) {
          t = i > 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.ticks)(u, v, n);
    } else {
      z = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.ticks)(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = function (count, specifier) {
    if (count == null) count = 10;
    if (specifier == null) specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.formatSpecifier)(specifier)).precision == null) specifier.trim = true;
      specifier = (0,_d3_format_js__WEBPACK_IMPORTED_MODULE_3__.format)(specifier);
    }
    if (count === Infinity) return specifier;
    var k = Math.max(1, base * count / scale.ticks().length);
    return function (d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };
  scale.nice = function () {
    return domain(nice(domain(), {
      floor: function floor(x) {
        return pows(Math.floor(logs(x)));
      },
      ceil: function ceil(x) {
        return pows(Math.ceil(logs(x)));
      }
    }));
  };
  return scale;
}
function log() {
  var scale = loggish(transformer()).domain([1, 10]);
  scale.copy = function () {
    return copy(scale, log()).base(scale.base());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function transformSymlog(c) {
  return function (x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}
function transformSymexp(c) {
  return function (x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}
function symlogish(transform) {
  var c = 1,
    scale = transform(transformSymlog(c), transformSymexp(c));
  scale.constant = function (_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function () {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}
function transformPow(exponent) {
  return function (x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}
function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}
function powish(transform) {
  var scale = transform(identity, identity),
    exponent = 1;
  function rescale() {
    return exponent === 1 ? transform(identity, identity) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }
  scale.exponent = function (_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };
  return linearish(scale);
}
function pow() {
  var scale = powish(transformer());
  scale.copy = function () {
    return copy(scale, pow()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}
function square(x) {
  return Math.sign(x) * x * x;
}
function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}
function radial() {
  var squared = continuous(),
    range2 = [0, 1],
    round = false,
    unknown;
  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }
  scale.invert = function (y) {
    return squared.invert(square(y));
  };
  scale.domain = function (_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };
  scale.range = function (_) {
    return arguments.length ? (squared.range((range2 = Array.from(_, number)).map(square)), scale) : range2.slice();
  };
  scale.rangeRound = function (_) {
    return scale.range(_).round(true);
  };
  scale.round = function (_) {
    return arguments.length ? (round = !!_, scale) : round;
  };
  scale.clamp = function (_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function () {
    return radial(squared.domain(), range2).round(round).clamp(squared.clamp()).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function quantile() {
  var domain = [],
    range2 = [],
    thresholds = [],
    unknown;
  function rescale() {
    var i = 0,
      n = Math.max(1, range2.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.quantileSorted)(domain, i / n);
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : range2[(0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.bisect)(thresholds, x)];
  }
  scale.invertExtent = function (y) {
    var i = range2.indexOf(y);
    return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
  };
  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    var _iterator2 = _createForOfIteratorHelper(_),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var d = _step2.value;
        if (d != null && !isNaN(d = +d)) domain.push(d);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    domain.sort(_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.ascending);
    return rescale();
  };
  scale.range = function (_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function () {
    return thresholds.slice();
  };
  scale.copy = function () {
    return quantile().domain(domain).range(range2).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}
function quantize() {
  var x0 = 0,
    x1 = 1,
    n = 1,
    domain = [0.5],
    range2 = [0, 1],
    unknown;
  function scale(x) {
    return x != null && x <= x ? range2[(0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.bisect)(domain, x, 0, n)] : unknown;
  }
  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }
  scale.domain = function (_) {
    var _ref4;
    return arguments.length ? ((_ref4 = _slicedToArray(_, 2), x0 = _ref4[0], x1 = _ref4[1]), x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };
  scale.range = function (_) {
    return arguments.length ? (n = (range2 = Array.from(_)).length - 1, rescale()) : range2.slice();
  };
  scale.invertExtent = function (y) {
    var i = range2.indexOf(y);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };
  scale.thresholds = function () {
    return domain.slice();
  };
  scale.copy = function () {
    return quantize().domain([x0, x1]).range(range2).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}
function threshold() {
  var domain = [0.5],
    range2 = [0, 1],
    unknown,
    n = 1;
  function scale(x) {
    return x != null && x <= x ? range2[(0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.bisect)(domain, x, 0, n)] : unknown;
  }
  scale.domain = function (_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : domain.slice();
  };
  scale.range = function (_) {
    return arguments.length ? (range2 = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : range2.slice();
  };
  scale.invertExtent = function (y) {
    var i = range2.indexOf(y);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function () {
    return threshold().domain(domain).range(range2).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}
function date(t) {
  return new Date(t);
}
function number$1(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second, format2) {
  var scale = continuous(),
    invert = scale.invert,
    domain = scale.domain;
  var formatMillisecond = format2(".%L"),
    formatSecond = format2(":%S"),
    formatMinute = format2("%I:%M"),
    formatHour = format2("%I %p"),
    formatDay = format2("%a %d"),
    formatWeek = format2("%b %d"),
    formatMonth = format2("%B"),
    formatYear = format2("%Y");
  function tickFormat2(date2) {
    return (second(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear)(date2);
  }
  scale.invert = function (y) {
    return new Date(invert(y));
  };
  scale.domain = function (_) {
    return arguments.length ? domain(Array.from(_, number$1)) : domain().map(date);
  };
  scale.ticks = function (interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function (count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function (interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function () {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(_d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeTicks, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeTickInterval, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeYear, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeMonth, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeWeek, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeDay, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeHour, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeMinute, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.timeSecond, _d3_time_format_js__WEBPACK_IMPORTED_MODULE_5__.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function utcTime() {
  return initRange.apply(calendar(_d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcTicks, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcTickInterval, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcYear, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcMonth, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcWeek, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcDay, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcHour, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcMinute, _d3_time_js__WEBPACK_IMPORTED_MODULE_4__.utcSecond, _d3_time_format_js__WEBPACK_IMPORTED_MODULE_5__.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function transformer$1() {
  var x0 = 0,
    x1 = 1,
    t0,
    t1,
    k10,
    transform,
    interpolator = identity,
    clamp = false,
    unknown;
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }
  scale.domain = function (_) {
    var _ref5;
    return arguments.length ? ((_ref5 = _slicedToArray(_, 2), x0 = _ref5[0], x1 = _ref5[1]), t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };
  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range2(interpolate2) {
    return function (_) {
      var _ref6;
      var r0, r1;
      return arguments.length ? ((_ref6 = _slicedToArray(_, 2), r0 = _ref6[0], r1 = _ref6[1]), interpolator = interpolate2(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range2(_d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.interpolate);
  scale.rangeRound = range2(_d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.interpolateRound);
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}
function copy$1(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer$1()(identity));
  scale.copy = function () {
    return copy$1(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
  var scale = loggish(transformer$1()).domain([1, 10]);
  scale.copy = function () {
    return copy$1(scale, sequentialLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = symlogish(transformer$1());
  scale.copy = function () {
    return copy$1(scale, sequentialSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
  var scale = powish(transformer$1());
  scale.copy = function () {
    return copy$1(scale, sequentialPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}
function sequentialQuantile() {
  var domain = [],
    interpolator = identity;
  function scale(x) {
    if (x != null && !isNaN(x = +x)) return interpolator(((0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.bisect)(domain, x, 1) - 1) / (domain.length - 1));
  }
  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    var _iterator3 = _createForOfIteratorHelper(_),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var d = _step3.value;
        if (d != null && !isNaN(d = +d)) domain.push(d);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    domain.sort(_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.ascending);
    return scale;
  };
  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.range = function () {
    return domain.map(function (d, i) {
      return interpolator(i / (domain.length - 1));
    });
  };
  scale.quantiles = function (n) {
    return Array.from({
      length: n + 1
    }, function (_, i) {
      return (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_1__.quantile)(domain, i / n);
    });
  };
  scale.copy = function () {
    return sequentialQuantile(interpolator).domain(domain);
  };
  return initInterpolator.apply(scale, arguments);
}
function transformer$2() {
  var x0 = 0,
    x1 = 0.5,
    x2 = 1,
    s = 1,
    t0,
    t1,
    t2,
    k10,
    k21,
    interpolator = identity,
    transform,
    clamp = false,
    unknown;
  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }
  scale.domain = function (_) {
    var _ref7;
    return arguments.length ? ((_ref7 = _slicedToArray(_, 3), x0 = _ref7[0], x1 = _ref7[1], x2 = _ref7[2]), t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };
  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range2(interpolate2) {
    return function (_) {
      var _ref8;
      var r0, r1, r2;
      return arguments.length ? ((_ref8 = _slicedToArray(_, 3), r0 = _ref8[0], r1 = _ref8[1], r2 = _ref8[2]), interpolator = (0,_d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.piecewise)(interpolate2, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range2(_d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.interpolate);
  scale.rangeRound = range2(_d3_interpolate_js__WEBPACK_IMPORTED_MODULE_2__.interpolateRound);
  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer$2()(identity));
  scale.copy = function () {
    return copy$1(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer$2()).domain([0.1, 1, 10]);
  scale.copy = function () {
    return copy$1(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer$2());
  scale.copy = function () {
    return copy$1(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer$2());
  scale.copy = function () {
    return copy$1(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Adder: () => (/* binding */ Adder),
/* harmony export */   InternMap: () => (/* reexport safe */ _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternMap),
/* harmony export */   InternSet: () => (/* reexport safe */ _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternSet),
/* harmony export */   ascending: () => (/* binding */ ascending),
/* harmony export */   bin: () => (/* binding */ bin),
/* harmony export */   bisect: () => (/* binding */ bisectRight),
/* harmony export */   bisectCenter: () => (/* binding */ bisectCenter),
/* harmony export */   bisectLeft: () => (/* binding */ bisectLeft),
/* harmony export */   bisectRight: () => (/* binding */ bisectRight),
/* harmony export */   bisector: () => (/* binding */ bisector),
/* harmony export */   count: () => (/* binding */ count),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   cumsum: () => (/* binding */ cumsum),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   descending: () => (/* binding */ descending),
/* harmony export */   deviation: () => (/* binding */ deviation),
/* harmony export */   difference: () => (/* binding */ difference),
/* harmony export */   disjoint: () => (/* binding */ disjoint),
/* harmony export */   every: () => (/* binding */ every),
/* harmony export */   extent: () => (/* binding */ extent),
/* harmony export */   fcumsum: () => (/* binding */ fcumsum),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   flatGroup: () => (/* binding */ flatGroup),
/* harmony export */   flatRollup: () => (/* binding */ flatRollup),
/* harmony export */   fsum: () => (/* binding */ fsum),
/* harmony export */   greatest: () => (/* binding */ greatest),
/* harmony export */   greatestIndex: () => (/* binding */ greatestIndex),
/* harmony export */   group: () => (/* binding */ group),
/* harmony export */   groupSort: () => (/* binding */ groupSort),
/* harmony export */   groups: () => (/* binding */ groups),
/* harmony export */   histogram: () => (/* binding */ bin),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   indexes: () => (/* binding */ indexes),
/* harmony export */   intersection: () => (/* binding */ intersection),
/* harmony export */   least: () => (/* binding */ least),
/* harmony export */   leastIndex: () => (/* binding */ leastIndex),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   maxIndex: () => (/* binding */ maxIndex),
/* harmony export */   mean: () => (/* binding */ mean),
/* harmony export */   median: () => (/* binding */ median),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   minIndex: () => (/* binding */ minIndex),
/* harmony export */   mode: () => (/* binding */ mode),
/* harmony export */   nice: () => (/* binding */ nice),
/* harmony export */   pairs: () => (/* binding */ pairs),
/* harmony export */   permute: () => (/* binding */ permute),
/* harmony export */   quantile: () => (/* binding */ quantile),
/* harmony export */   quantileSorted: () => (/* binding */ quantileSorted),
/* harmony export */   quickselect: () => (/* binding */ quickselect),
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   rank: () => (/* binding */ rank),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   reverse: () => (/* binding */ reverse),
/* harmony export */   rollup: () => (/* binding */ rollup),
/* harmony export */   rollups: () => (/* binding */ rollups),
/* harmony export */   scan: () => (/* binding */ scan),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   shuffler: () => (/* binding */ shuffler),
/* harmony export */   some: () => (/* binding */ some),
/* harmony export */   sort: () => (/* binding */ sort),
/* harmony export */   subset: () => (/* binding */ subset),
/* harmony export */   sum: () => (/* binding */ sum),
/* harmony export */   superset: () => (/* binding */ superset),
/* harmony export */   thresholdFreedmanDiaconis: () => (/* binding */ thresholdFreedmanDiaconis),
/* harmony export */   thresholdScott: () => (/* binding */ thresholdScott),
/* harmony export */   thresholdSturges: () => (/* binding */ thresholdSturges),
/* harmony export */   tickIncrement: () => (/* binding */ tickIncrement),
/* harmony export */   tickStep: () => (/* binding */ tickStep),
/* harmony export */   ticks: () => (/* binding */ ticks),
/* harmony export */   transpose: () => (/* binding */ transpose),
/* harmony export */   union: () => (/* binding */ union),
/* harmony export */   variance: () => (/* binding */ variance),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
/* harmony import */ var _internmap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(numbers),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(flatten$1);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function bisector(f) {
  var delta = f;
  var compare1 = f;
  var compare2 = f;
  if (f.length !== 2) {
    delta = function delta(d, x) {
      return f(d) - x;
    };
    compare1 = ascending;
    compare2 = function compare2(d, x) {
      return ascending(f(d), x);
    };
  }
  function left(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        var mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        var mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
    var i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return {
    left: left,
    center: center,
    right: right
  };
}
function number(x) {
  return x === null ? NaN : +x;
}
function numbers(values, valueof) {
  var _iterator, _step, value, index2, _iterator2, _step2, _value;
  return _regeneratorRuntime().wrap(function numbers$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        if (!(valueof === void 0)) {
          _context.next = 21;
          break;
        }
        _iterator = _createForOfIteratorHelper(values);
        _context.prev = 2;
        _iterator.s();
      case 4:
        if ((_step = _iterator.n()).done) {
          _context.next = 11;
          break;
        }
        value = _step.value;
        if (!(value != null && (value = +value) >= value)) {
          _context.next = 9;
          break;
        }
        _context.next = 9;
        return value;
      case 9:
        _context.next = 4;
        break;
      case 11:
        _context.next = 16;
        break;
      case 13:
        _context.prev = 13;
        _context.t0 = _context["catch"](2);
        _iterator.e(_context.t0);
      case 16:
        _context.prev = 16;
        _iterator.f();
        return _context.finish(16);
      case 19:
        _context.next = 40;
        break;
      case 21:
        index2 = -1;
        _iterator2 = _createForOfIteratorHelper(values);
        _context.prev = 23;
        _iterator2.s();
      case 25:
        if ((_step2 = _iterator2.n()).done) {
          _context.next = 32;
          break;
        }
        _value = _step2.value;
        if (!((_value = valueof(_value, ++index2, values)) != null && (_value = +_value) >= _value)) {
          _context.next = 30;
          break;
        }
        _context.next = 30;
        return _value;
      case 30:
        _context.next = 25;
        break;
      case 32:
        _context.next = 37;
        break;
      case 34:
        _context.prev = 34;
        _context.t1 = _context["catch"](23);
        _iterator2.e(_context.t1);
      case 37:
        _context.prev = 37;
        _iterator2.f();
        return _context.finish(37);
      case 40:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[2, 13, 16, 19], [23, 34, 37, 40]]);
}
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
function count(values, valueof) {
  var count2 = 0;
  if (valueof === void 0) {
    var _iterator3 = _createForOfIteratorHelper(values),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var value = _step3.value;
        if (value != null && (value = +value) >= value) {
          ++count2;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } else {
    var index2 = -1;
    var _iterator4 = _createForOfIteratorHelper(values),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _value2 = _step4.value;
        if ((_value2 = valueof(_value2, ++index2, values)) != null && (_value2 = +_value2) >= _value2) {
          ++count2;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  return count2;
}
function length(array2) {
  return array2.length | 0;
}
function empty(length2) {
  return !(length2 > 0);
}
function arrayify(values) {
  return _typeof(values) !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce2) {
  return function (values) {
    return reduce2.apply(void 0, _toConsumableArray(values));
  };
}
function cross() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  var reduce2 = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  var lengths = values.map(length);
  var j = values.length - 1;
  var index2 = new Array(j + 1).fill(0);
  var product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index2.map(function (j2, i2) {
      return values[i2][j2];
    }));
    var i = j;
    while (++index2[i] === lengths[i]) {
      if (i === 0) return reduce2 ? product.map(reduce2) : product;
      index2[i--] = 0;
    }
  }
}
function cumsum(values, valueof) {
  var sum2 = 0,
    index2 = 0;
  return Float64Array.from(values, valueof === void 0 ? function (v) {
    return sum2 += +v || 0;
  } : function (v) {
    return sum2 += +valueof(v, index2++, values) || 0;
  });
}
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function variance(values, valueof) {
  var count2 = 0;
  var delta;
  var mean2 = 0;
  var sum2 = 0;
  if (valueof === void 0) {
    var _iterator5 = _createForOfIteratorHelper(values),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var value = _step5.value;
        if (value != null && (value = +value) >= value) {
          delta = value - mean2;
          mean2 += delta / ++count2;
          sum2 += delta * (value - mean2);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  } else {
    var index2 = -1;
    var _iterator6 = _createForOfIteratorHelper(values),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _value3 = _step6.value;
        if ((_value3 = valueof(_value3, ++index2, values)) != null && (_value3 = +_value3) >= _value3) {
          delta = _value3 - mean2;
          mean2 += delta / ++count2;
          sum2 += delta * (_value3 - mean2);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  if (count2 > 1) return sum2 / (count2 - 1);
}
function deviation(values, valueof) {
  var v = variance(values, valueof);
  return v ? Math.sqrt(v) : v;
}
function extent(values, valueof) {
  var min2;
  var max2;
  if (valueof === void 0) {
    var _iterator7 = _createForOfIteratorHelper(values),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var value = _step7.value;
        if (value != null) {
          if (min2 === void 0) {
            if (value >= value) min2 = max2 = value;
          } else {
            if (min2 > value) min2 = value;
            if (max2 < value) max2 = value;
          }
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  } else {
    var index2 = -1;
    var _iterator8 = _createForOfIteratorHelper(values),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _value4 = _step8.value;
        if ((_value4 = valueof(_value4, ++index2, values)) != null) {
          if (min2 === void 0) {
            if (_value4 >= _value4) min2 = max2 = _value4;
          } else {
            if (min2 > _value4) min2 = _value4;
            if (max2 < _value4) max2 = _value4;
          }
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }
  return [min2, max2];
}
var Adder = /*#__PURE__*/function () {
  function Adder() {
    _classCallCheck(this, Adder);
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  return _createClass(Adder, [{
    key: "add",
    value: function add(x) {
      var p = this._partials;
      var i = 0;
      for (var j = 0; j < this._n && j < 32; j++) {
        var y = p[j],
          hi = x + y,
          lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
        if (lo) p[i++] = lo;
        x = hi;
      }
      p[i] = x;
      this._n = i + 1;
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var p = this._partials;
      var n = this._n,
        x,
        y,
        lo,
        hi = 0;
      if (n > 0) {
        hi = p[--n];
        while (n > 0) {
          x = hi;
          y = p[--n];
          hi = x + y;
          lo = y - (hi - x);
          if (lo) break;
        }
        if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
          y = lo * 2;
          x = hi + y;
          if (y == x - hi) hi = x;
        }
      }
      return hi;
    }
  }]);
}();
function fsum(values, valueof) {
  var adder = new Adder();
  if (valueof === void 0) {
    var _iterator9 = _createForOfIteratorHelper(values),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var value = _step9.value;
        if (value = +value) {
          adder.add(value);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  } else {
    var index2 = -1;
    var _iterator10 = _createForOfIteratorHelper(values),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _value5 = _step10.value;
        if (_value5 = +valueof(_value5, ++index2, values)) {
          adder.add(_value5);
        }
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  }
  return +adder;
}
function fcumsum(values, valueof) {
  var adder = new Adder();
  var index2 = -1;
  return Float64Array.from(values, valueof === void 0 ? function (v) {
    return adder.add(+v || 0);
  } : function (v) {
    return adder.add(+valueof(v, ++index2, values) || 0);
  });
}
function identity(x) {
  return x;
}
function group(values) {
  for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    keys[_key2 - 1] = arguments[_key2];
  }
  return nest(values, identity, identity, keys);
}
function groups(values) {
  for (var _len3 = arguments.length, keys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    keys[_key3 - 1] = arguments[_key3];
  }
  return nest(values, Array.from, identity, keys);
}
function flatten(groups2, keys) {
  for (var i = 1, n = keys.length; i < n; ++i) {
    groups2 = groups2.flatMap(function (g) {
      return g.pop().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return [].concat(_toConsumableArray(g), [key, value]);
      });
    });
  }
  return groups2;
}
function flatGroup(values) {
  for (var _len4 = arguments.length, keys = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    keys[_key4 - 1] = arguments[_key4];
  }
  return flatten(groups.apply(void 0, [values].concat(keys)), keys);
}
function flatRollup(values, reduce2) {
  for (var _len5 = arguments.length, keys = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    keys[_key5 - 2] = arguments[_key5];
  }
  return flatten(rollups.apply(void 0, [values, reduce2].concat(keys)), keys);
}
function rollup(values, reduce2) {
  for (var _len6 = arguments.length, keys = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    keys[_key6 - 2] = arguments[_key6];
  }
  return nest(values, identity, reduce2, keys);
}
function rollups(values, reduce2) {
  for (var _len7 = arguments.length, keys = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    keys[_key7 - 2] = arguments[_key7];
  }
  return nest(values, Array.from, reduce2, keys);
}
function index(values) {
  for (var _len8 = arguments.length, keys = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    keys[_key8 - 1] = arguments[_key8];
  }
  return nest(values, identity, unique, keys);
}
function indexes(values) {
  for (var _len9 = arguments.length, keys = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
    keys[_key9 - 1] = arguments[_key9];
  }
  return nest(values, Array.from, unique, keys);
}
function unique(values) {
  if (values.length !== 1) throw new Error("duplicate key");
  return values[0];
}
function nest(values, map2, reduce2, keys) {
  return function regroup(values2, i) {
    if (i >= keys.length) return reduce2(values2);
    var groups2 = new _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternMap();
    var keyof = keys[i++];
    var index2 = -1;
    var _iterator11 = _createForOfIteratorHelper(values2),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var value = _step11.value;
        var key = keyof(value, ++index2, values2);
        var group2 = groups2.get(key);
        if (group2) group2.push(value);else groups2.set(key, [value]);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    var _iterator12 = _createForOfIteratorHelper(groups2),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _step12$value = _slicedToArray(_step12.value, 2),
          _key10 = _step12$value[0],
          values3 = _step12$value[1];
        groups2.set(_key10, regroup(values3, i));
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    return map2(groups2);
  }(values, 0);
}
function permute(source, keys) {
  return Array.from(keys, function (key) {
    return source[key];
  });
}
function sort(values) {
  for (var _len10 = arguments.length, F = new Array(_len10 > 1 ? _len10 - 1 : 0), _key11 = 1; _key11 < _len10; _key11++) {
    F[_key11 - 1] = arguments[_key11];
  }
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  var _F = F,
    _F2 = _slicedToArray(_F, 1),
    f = _F2[0];
  if (f && f.length !== 2 || F.length > 1) {
    var index2 = Uint32Array.from(values, function (d, i) {
      return i;
    });
    if (F.length > 1) {
      F = F.map(function (f2) {
        return values.map(f2);
      });
      index2.sort(function (i, j) {
        var _iterator13 = _createForOfIteratorHelper(F),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var f2 = _step13.value;
            var c = ascendingDefined(f2[i], f2[j]);
            if (c) return c;
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      });
    } else {
      f = values.map(f);
      index2.sort(function (i, j) {
        return ascendingDefined(f[i], f[j]);
      });
    }
    return permute(values, index2);
  }
  return values.sort(compareDefined(f));
}
function compareDefined() {
  var compare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ascending;
  if (compare === ascending) return ascendingDefined;
  if (typeof compare !== "function") throw new TypeError("compare is not a function");
  return function (a, b) {
    var x = compare(a, b);
    if (x || x === 0) return x;
    return (compare(b, b) === 0) - (compare(a, a) === 0);
  };
}
function ascendingDefined(a, b) {
  return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}
function groupSort(values, reduce2, key) {
  return (reduce2.length !== 2 ? sort(rollup(values, reduce2, key), function (_ref3, _ref4) {
    var _ref5 = _slicedToArray(_ref3, 2),
      ak = _ref5[0],
      av = _ref5[1];
    var _ref6 = _slicedToArray(_ref4, 2),
      bk = _ref6[0],
      bv = _ref6[1];
    return ascending(av, bv) || ascending(ak, bk);
  }) : sort(group(values, key), function (_ref7, _ref8) {
    var _ref9 = _slicedToArray(_ref7, 2),
      ak = _ref9[0],
      av = _ref9[1];
    var _ref10 = _slicedToArray(_ref8, 2),
      bk = _ref10[0],
      bv = _ref10[1];
    return reduce2(av, bv) || ascending(ak, bk);
  })).map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 1),
      key2 = _ref12[0];
    return key2;
  });
}
var array = Array.prototype;
var slice = array.slice;
function constant(x) {
  return function () {
    return x;
  };
}
var e10 = Math.sqrt(50),
  e5 = Math.sqrt(10),
  e2 = Math.sqrt(2);
function ticks(start, stop, count2) {
  var reverse2,
    i = -1,
    n,
    ticks2,
    step;
  stop = +stop, start = +start, count2 = +count2;
  if (start === stop && count2 > 0) return [start];
  if (reverse2 = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count2)) === 0 || !isFinite(step)) return [];
  if (step > 0) {
    var r0 = Math.round(start / step),
      r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks2 = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks2[i] = (r0 + i) * step;
  } else {
    step = -step;
    var _r = Math.round(start * step),
      _r2 = Math.round(stop * step);
    if (_r / step < start) ++_r;
    if (_r2 / step > stop) --_r2;
    ticks2 = new Array(n = _r2 - _r + 1);
    while (++i < n) ticks2[i] = (_r + i) / step;
  }
  if (reverse2) ticks2.reverse();
  return ticks2;
}
function tickIncrement(start, stop, count2) {
  var step = (stop - start) / Math.max(0, count2),
    power = Math.floor(Math.log(step) / Math.LN10),
    error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count2) {
  var step0 = Math.abs(stop - start) / Math.max(0, count2),
    step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
    error = step0 / step1;
  if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}
function nice(start, stop, count2) {
  var prestep;
  while (true) {
    var step = tickIncrement(start, stop, count2);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}
function thresholdSturges(values) {
  return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
}
function bin() {
  var value = identity,
    domain = extent,
    threshold = thresholdSturges;
  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);
    var i,
      n = data.length,
      x,
      values = new Array(n);
    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }
    var xz = domain(values),
      x0 = xz[0],
      x1 = xz[1],
      tz = threshold(values, x0, x1);
    if (!Array.isArray(tz)) {
      var max2 = x1,
        tn = +tz;
      if (domain === extent) {
        var _nice = nice(x0, x1, tn);
        var _nice2 = _slicedToArray(_nice, 2);
        x0 = _nice2[0];
        x1 = _nice2[1];
      }
      tz = ticks(x0, x1, tn);
      if (tz[tz.length - 1] >= x1) {
        if (max2 >= x1 && domain === extent) {
          var step = tickIncrement(x0, x1, tn);
          if (isFinite(step)) {
            if (step > 0) {
              x1 = (Math.floor(x1 / step) + 1) * step;
            } else if (step < 0) {
              x1 = (Math.ceil(x1 * -step) + 1) / -step;
            }
          }
        } else {
          tz.pop();
        }
      }
    }
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;
    var bins = new Array(m + 1),
      bin2;
    for (i = 0; i <= m; ++i) {
      bin2 = bins[i] = [];
      bin2.x0 = i > 0 ? tz[i - 1] : x0;
      bin2.x1 = i < m ? tz[i] : x1;
    }
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x != null && x0 <= x && x <= x1) {
        bins[bisectRight(tz, x, 0, m)].push(data[i]);
      }
    }
    return bins;
  }
  histogram.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
  };
  histogram.domain = function (_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
  };
  histogram.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
  };
  return histogram;
}
function max(values, valueof) {
  var max2;
  if (valueof === void 0) {
    var _iterator14 = _createForOfIteratorHelper(values),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var value = _step14.value;
        if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
          max2 = value;
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  } else {
    var index2 = -1;
    var _iterator15 = _createForOfIteratorHelper(values),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _value6 = _step15.value;
        if ((_value6 = valueof(_value6, ++index2, values)) != null && (max2 < _value6 || max2 === void 0 && _value6 >= _value6)) {
          max2 = _value6;
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
  }
  return max2;
}
function min(values, valueof) {
  var min2;
  if (valueof === void 0) {
    var _iterator16 = _createForOfIteratorHelper(values),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var value = _step16.value;
        if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
          min2 = value;
        }
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
  } else {
    var index2 = -1;
    var _iterator17 = _createForOfIteratorHelper(values),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _value7 = _step17.value;
        if ((_value7 = valueof(_value7, ++index2, values)) != null && (min2 > _value7 || min2 === void 0 && _value7 >= _value7)) {
          min2 = _value7;
        }
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }
  return min2;
}
function quickselect(array2, k) {
  var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var right = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array2.length - 1;
  var compare = arguments.length > 4 ? arguments[4] : undefined;
  compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
  while (right > left) {
    if (right - left > 600) {
      var n = right - left + 1;
      var m = k - left + 1;
      var z = Math.log(n);
      var s = 0.5 * Math.exp(2 * z / 3);
      var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array2, k, newLeft, newRight, compare);
    }
    var t = array2[k];
    var i = left;
    var j = right;
    swap(array2, left, k);
    if (compare(array2[right], t) > 0) swap(array2, left, right);
    while (i < j) {
      swap(array2, i, j), ++i, --j;
      while (compare(array2[i], t) < 0) ++i;
      while (compare(array2[j], t) > 0) --j;
    }
    if (compare(array2[left], t) === 0) swap(array2, left, j);else ++j, swap(array2, j, right);
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array2;
}
function swap(array2, i, j) {
  var t = array2[i];
  array2[i] = array2[j];
  array2[j] = t;
}
function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n,
    i = (n - 1) * p,
    i0 = Math.floor(i),
    value0 = max(quickselect(values, i0).subarray(0, i0 + 1)),
    value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p) {
  var valueof = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : number;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
    i = (n - 1) * p,
    i0 = Math.floor(i),
    value0 = +valueof(values[i0], i0, values),
    value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}
function thresholdFreedmanDiaconis(values, min2, max2) {
  return Math.ceil((max2 - min2) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(count(values), -1 / 3)));
}
function thresholdScott(values, min2, max2) {
  return Math.ceil((max2 - min2) / (3.5 * deviation(values) * Math.pow(count(values), -1 / 3)));
}
function maxIndex(values, valueof) {
  var max2;
  var maxIndex2 = -1;
  var index2 = -1;
  if (valueof === void 0) {
    var _iterator18 = _createForOfIteratorHelper(values),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var value = _step18.value;
        ++index2;
        if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
          max2 = value, maxIndex2 = index2;
        }
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  } else {
    var _iterator19 = _createForOfIteratorHelper(values),
      _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var _value8 = _step19.value;
        if ((_value8 = valueof(_value8, ++index2, values)) != null && (max2 < _value8 || max2 === void 0 && _value8 >= _value8)) {
          max2 = _value8, maxIndex2 = index2;
        }
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
  }
  return maxIndex2;
}
function mean(values, valueof) {
  var count2 = 0;
  var sum2 = 0;
  if (valueof === void 0) {
    var _iterator20 = _createForOfIteratorHelper(values),
      _step20;
    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var value = _step20.value;
        if (value != null && (value = +value) >= value) {
          ++count2, sum2 += value;
        }
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
  } else {
    var index2 = -1;
    var _iterator21 = _createForOfIteratorHelper(values),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var _value9 = _step21.value;
        if ((_value9 = valueof(_value9, ++index2, values)) != null && (_value9 = +_value9) >= _value9) {
          ++count2, sum2 += _value9;
        }
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
  }
  if (count2) return sum2 / count2;
}
function median(values, valueof) {
  return quantile(values, 0.5, valueof);
}
function flatten$1(arrays) {
  var _iterator22, _step22, array2;
  return _regeneratorRuntime().wrap(function flatten$1$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _iterator22 = _createForOfIteratorHelper(arrays);
        _context2.prev = 1;
        _iterator22.s();
      case 3:
        if ((_step22 = _iterator22.n()).done) {
          _context2.next = 8;
          break;
        }
        array2 = _step22.value;
        return _context2.delegateYield(array2, "t0", 6);
      case 6:
        _context2.next = 3;
        break;
      case 8:
        _context2.next = 13;
        break;
      case 10:
        _context2.prev = 10;
        _context2.t1 = _context2["catch"](1);
        _iterator22.e(_context2.t1);
      case 13:
        _context2.prev = 13;
        _iterator22.f();
        return _context2.finish(13);
      case 16:
      case "end":
        return _context2.stop();
    }
  }, _marked2, null, [[1, 10, 13, 16]]);
}
function merge(arrays) {
  return Array.from(flatten$1(arrays));
}
function minIndex(values, valueof) {
  var min2;
  var minIndex2 = -1;
  var index2 = -1;
  if (valueof === void 0) {
    var _iterator23 = _createForOfIteratorHelper(values),
      _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var value = _step23.value;
        ++index2;
        if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
          min2 = value, minIndex2 = index2;
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
  } else {
    var _iterator24 = _createForOfIteratorHelper(values),
      _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var _value10 = _step24.value;
        if ((_value10 = valueof(_value10, ++index2, values)) != null && (min2 > _value10 || min2 === void 0 && _value10 >= _value10)) {
          min2 = _value10, minIndex2 = index2;
        }
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  }
  return minIndex2;
}
function mode(values, valueof) {
  var counts = new _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternMap();
  if (valueof === void 0) {
    var _iterator25 = _createForOfIteratorHelper(values),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        var value = _step25.value;
        if (value != null && value >= value) {
          counts.set(value, (counts.get(value) || 0) + 1);
        }
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
  } else {
    var index2 = -1;
    var _iterator26 = _createForOfIteratorHelper(values),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var _value11 = _step26.value;
        if ((_value11 = valueof(_value11, ++index2, values)) != null && _value11 >= _value11) {
          counts.set(_value11, (counts.get(_value11) || 0) + 1);
        }
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
  }
  var modeValue;
  var modeCount = 0;
  var _iterator27 = _createForOfIteratorHelper(counts),
    _step27;
  try {
    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
      var _step27$value = _slicedToArray(_step27.value, 2),
        _value12 = _step27$value[0],
        count2 = _step27$value[1];
      if (count2 > modeCount) {
        modeCount = count2;
        modeValue = _value12;
      }
    }
  } catch (err) {
    _iterator27.e(err);
  } finally {
    _iterator27.f();
  }
  return modeValue;
}
function pairs(values) {
  var pairof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pair;
  var pairs2 = [];
  var previous;
  var first = false;
  var _iterator28 = _createForOfIteratorHelper(values),
    _step28;
  try {
    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
      var value = _step28.value;
      if (first) pairs2.push(pairof(previous, value));
      previous = value;
      first = true;
    }
  } catch (err) {
    _iterator28.e(err);
  } finally {
    _iterator28.f();
  }
  return pairs2;
}
function pair(a, b) {
  return [a, b];
}
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1,
    n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
    range2 = new Array(n);
  while (++i < n) {
    range2[i] = start + i * step;
  }
  return range2;
}
function rank(values) {
  var valueof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ascending;
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  var V = Array.from(values);
  var R = new Float64Array(V.length);
  if (valueof.length !== 2) V = V.map(valueof), valueof = ascending;
  var compareIndex = function compareIndex(i, j) {
    return valueof(V[i], V[j]);
  };
  var k, r;
  Uint32Array.from(V, function (_, i) {
    return i;
  }).sort(valueof === ascending ? function (i, j) {
    return ascendingDefined(V[i], V[j]);
  } : compareDefined(compareIndex)).forEach(function (j, i) {
    var c = compareIndex(j, k === void 0 ? j : k);
    if (c >= 0) {
      if (k === void 0 || c > 0) k = j, r = i;
      R[j] = r;
    } else {
      R[j] = NaN;
    }
  });
  return R;
}
function least(values) {
  var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ascending;
  var min2;
  var defined = false;
  if (compare.length === 1) {
    var minValue;
    var _iterator29 = _createForOfIteratorHelper(values),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var element = _step29.value;
        var value = compare(element);
        if (defined ? ascending(value, minValue) < 0 : ascending(value, value) === 0) {
          min2 = element;
          minValue = value;
          defined = true;
        }
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
  } else {
    var _iterator30 = _createForOfIteratorHelper(values),
      _step30;
    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _value13 = _step30.value;
        if (defined ? compare(_value13, min2) < 0 : compare(_value13, _value13) === 0) {
          min2 = _value13;
          defined = true;
        }
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
  }
  return min2;
}
function leastIndex(values) {
  var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ascending;
  if (compare.length === 1) return minIndex(values, compare);
  var minValue;
  var min2 = -1;
  var index2 = -1;
  var _iterator31 = _createForOfIteratorHelper(values),
    _step31;
  try {
    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
      var value = _step31.value;
      ++index2;
      if (min2 < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
        minValue = value;
        min2 = index2;
      }
    }
  } catch (err) {
    _iterator31.e(err);
  } finally {
    _iterator31.f();
  }
  return min2;
}
function greatest(values) {
  var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ascending;
  var max2;
  var defined = false;
  if (compare.length === 1) {
    var maxValue;
    var _iterator32 = _createForOfIteratorHelper(values),
      _step32;
    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var element = _step32.value;
        var value = compare(element);
        if (defined ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
          max2 = element;
          maxValue = value;
          defined = true;
        }
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
  } else {
    var _iterator33 = _createForOfIteratorHelper(values),
      _step33;
    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var _value14 = _step33.value;
        if (defined ? compare(_value14, max2) > 0 : compare(_value14, _value14) === 0) {
          max2 = _value14;
          defined = true;
        }
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
  }
  return max2;
}
function greatestIndex(values) {
  var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ascending;
  if (compare.length === 1) return maxIndex(values, compare);
  var maxValue;
  var max2 = -1;
  var index2 = -1;
  var _iterator34 = _createForOfIteratorHelper(values),
    _step34;
  try {
    for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
      var value = _step34.value;
      ++index2;
      if (max2 < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
        maxValue = value;
        max2 = index2;
      }
    }
  } catch (err) {
    _iterator34.e(err);
  } finally {
    _iterator34.f();
  }
  return max2;
}
function scan(values, compare) {
  var index2 = leastIndex(values, compare);
  return index2 < 0 ? void 0 : index2;
}
var shuffle = shuffler(Math.random);
function shuffler(random) {
  return function shuffle2(array2) {
    var i0 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var i1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array2.length;
    var m = i1 - (i0 = +i0);
    while (m) {
      var i = random() * m-- | 0,
        t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
}
function sum(values, valueof) {
  var sum2 = 0;
  if (valueof === void 0) {
    var _iterator35 = _createForOfIteratorHelper(values),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var value = _step35.value;
        if (value = +value) {
          sum2 += value;
        }
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
  } else {
    var index2 = -1;
    var _iterator36 = _createForOfIteratorHelper(values),
      _step36;
    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var _value15 = _step36.value;
        if (_value15 = +valueof(_value15, ++index2, values)) {
          sum2 += _value15;
        }
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }
  }
  return sum2;
}
function transpose(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = min(matrix, length$1), transpose2 = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose2[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose2;
}
function length$1(d) {
  return d.length;
}
function zip() {
  return transpose(arguments);
}
function every(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  var index2 = -1;
  var _iterator37 = _createForOfIteratorHelper(values),
    _step37;
  try {
    for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
      var value = _step37.value;
      if (!test(value, ++index2, values)) {
        return false;
      }
    }
  } catch (err) {
    _iterator37.e(err);
  } finally {
    _iterator37.f();
  }
  return true;
}
function some(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  var index2 = -1;
  var _iterator38 = _createForOfIteratorHelper(values),
    _step38;
  try {
    for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
      var value = _step38.value;
      if (test(value, ++index2, values)) {
        return true;
      }
    }
  } catch (err) {
    _iterator38.e(err);
  } finally {
    _iterator38.f();
  }
  return false;
}
function filter(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  var array2 = [];
  var index2 = -1;
  var _iterator39 = _createForOfIteratorHelper(values),
    _step39;
  try {
    for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
      var value = _step39.value;
      if (test(value, ++index2, values)) {
        array2.push(value);
      }
    }
  } catch (err) {
    _iterator39.e(err);
  } finally {
    _iterator39.f();
  }
  return array2;
}
function map(values, mapper) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
  return Array.from(values, function (value, index2) {
    return mapper(value, index2, values);
  });
}
function reduce(values, reducer2, value) {
  if (typeof reducer2 !== "function") throw new TypeError("reducer is not a function");
  var iterator = values[Symbol.iterator]();
  var done,
    next,
    index2 = -1;
  if (arguments.length < 3) {
    var _iterator$next = iterator.next();
    done = _iterator$next.done;
    value = _iterator$next.value;
    if (done) return;
    ++index2;
  }
  while ((_iterator$next2 = iterator.next(), done = _iterator$next2.done, next = _iterator$next2.value), !done) {
    var _iterator$next2;
    value = reducer2(value, next, ++index2, values);
  }
  return value;
}
function reverse(values) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).reverse();
}
function difference(values) {
  values = new _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternSet(values);
  for (var _len11 = arguments.length, others = new Array(_len11 > 1 ? _len11 - 1 : 0), _key12 = 1; _key12 < _len11; _key12++) {
    others[_key12 - 1] = arguments[_key12];
  }
  for (var _i = 0, _others = others; _i < _others.length; _i++) {
    var other = _others[_i];
    var _iterator40 = _createForOfIteratorHelper(other),
      _step40;
    try {
      for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
        var value = _step40.value;
        values["delete"](value);
      }
    } catch (err) {
      _iterator40.e(err);
    } finally {
      _iterator40.f();
    }
  }
  return values;
}
function disjoint(values, other) {
  var iterator = other[Symbol.iterator](),
    set2 = new _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternSet();
  var _iterator41 = _createForOfIteratorHelper(values),
    _step41;
  try {
    for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
      var v = _step41.value;
      if (set2.has(v)) return false;
      var value = void 0,
        done = void 0;
      while (_iterator$next3 = iterator.next(), value = _iterator$next3.value, done = _iterator$next3.done, _iterator$next3) {
        var _iterator$next3;
        if (done) break;
        if (Object.is(v, value)) return false;
        set2.add(value);
      }
    }
  } catch (err) {
    _iterator41.e(err);
  } finally {
    _iterator41.f();
  }
  return true;
}
function intersection(values) {
  for (var _len12 = arguments.length, others = new Array(_len12 > 1 ? _len12 - 1 : 0), _key13 = 1; _key13 < _len12; _key13++) {
    others[_key13 - 1] = arguments[_key13];
  }
  values = new _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternSet(values);
  others = others.map(set);
  var _iterator42 = _createForOfIteratorHelper(values),
    _step42;
  try {
    out: for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
      var value = _step42.value;
      var _iterator43 = _createForOfIteratorHelper(others),
        _step43;
      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
          var other = _step43.value;
          if (!other.has(value)) {
            values["delete"](value);
            continue out;
          }
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }
    }
  } catch (err) {
    _iterator42.e(err);
  } finally {
    _iterator42.f();
  }
  return values;
}
function set(values) {
  return values instanceof _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternSet ? values : new _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternSet(values);
}
function superset(values, other) {
  var iterator = values[Symbol.iterator](),
    set2 = new Set();
  var _iterator44 = _createForOfIteratorHelper(other),
    _step44;
  try {
    for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
      var o = _step44.value;
      var io = intern(o);
      if (set2.has(io)) continue;
      var value = void 0,
        done = void 0;
      while (_iterator$next4 = iterator.next(), value = _iterator$next4.value, done = _iterator$next4.done, _iterator$next4) {
        var _iterator$next4;
        if (done) return false;
        var ivalue = intern(value);
        set2.add(ivalue);
        if (Object.is(io, ivalue)) break;
      }
    }
  } catch (err) {
    _iterator44.e(err);
  } finally {
    _iterator44.f();
  }
  return true;
}
function intern(value) {
  return value !== null && _typeof(value) === "object" ? value.valueOf() : value;
}
function subset(values, other) {
  return superset(other, values);
}
function union() {
  var set2 = new _internmap_js__WEBPACK_IMPORTED_MODULE_0__.InternSet();
  for (var _len13 = arguments.length, others = new Array(_len13), _key14 = 0; _key14 < _len13; _key14++) {
    others[_key14] = arguments[_key14];
  }
  for (var _i2 = 0, _others2 = others; _i2 < _others2.length; _i2++) {
    var other = _others2[_i2];
    var _iterator45 = _createForOfIteratorHelper(other),
      _step45;
    try {
      for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
        var o = _step45.value;
        set2.add(o);
      }
    } catch (err) {
      _iterator45.e(err);
    } finally {
      _iterator45.f();
    }
  }
  return set2;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternMap: () => (/* binding */ InternMap),
/* harmony export */   InternSet: () => (/* binding */ InternSet),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var InternMap = /*#__PURE__*/function (_Map) {
  function InternMap(entries) {
    var _this;
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : keyof;
    _classCallCheck(this, InternMap);
    _this = _callSuper(this, InternMap);
    Object.defineProperties(_this, {
      _intern: {
        value: new Map()
      },
      _key: {
        value: key
      }
    });
    if (entries != null) {
      var _iterator = _createForOfIteratorHelper(entries),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key2 = _step$value[0],
            value = _step$value[1];
          _this.set(key2, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return _this;
  }
  _inherits(InternMap, _Map);
  return _createClass(InternMap, [{
    key: "get",
    value: function get(key) {
      return _get(_getPrototypeOf(InternMap.prototype), "get", this).call(this, intern_get(this, key));
    }
  }, {
    key: "has",
    value: function has(key) {
      return _get(_getPrototypeOf(InternMap.prototype), "has", this).call(this, intern_get(this, key));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return _get(_getPrototypeOf(InternMap.prototype), "set", this).call(this, intern_set(this, key), value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return _get(_getPrototypeOf(InternMap.prototype), "delete", this).call(this, intern_delete(this, key));
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Map));
var InternSet = /*#__PURE__*/function (_Set) {
  function InternSet(values) {
    var _this2;
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : keyof;
    _classCallCheck(this, InternSet);
    _this2 = _callSuper(this, InternSet);
    Object.defineProperties(_this2, {
      _intern: {
        value: new Map()
      },
      _key: {
        value: key
      }
    });
    if (values != null) {
      var _iterator2 = _createForOfIteratorHelper(values),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var value = _step2.value;
          _this2.add(value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return _this2;
  }
  _inherits(InternSet, _Set);
  return _createClass(InternSet, [{
    key: "has",
    value: function has(value) {
      return _get(_getPrototypeOf(InternSet.prototype), "has", this).call(this, intern_get(this, value));
    }
  }, {
    key: "add",
    value: function add(value) {
      return _get(_getPrototypeOf(InternSet.prototype), "add", this).call(this, intern_set(this, value));
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      return _get(_getPrototypeOf(InternSet.prototype), "delete", this).call(this, intern_delete(this, value));
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Set));
function intern_get(_ref, value) {
  var _intern = _ref._intern,
    _key = _ref._key;
  var key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set(_ref2, value) {
  var _intern = _ref2._intern,
    _key = _ref2._key;
  var key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete(_ref3, value) {
  var _intern = _ref3._intern,
    _key = _ref3._key;
  var key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern["delete"](key);
  }
  return value;
}
function keyof(value) {
  return value !== null && _typeof(value) === "object" ? value.valueOf() : value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   interpolate: () => (/* binding */ value),
/* harmony export */   interpolateArray: () => (/* binding */ array),
/* harmony export */   interpolateBasis: () => (/* binding */ basis$1),
/* harmony export */   interpolateBasisClosed: () => (/* binding */ basisClosed),
/* harmony export */   interpolateCubehelix: () => (/* binding */ cubehelix$1),
/* harmony export */   interpolateCubehelixLong: () => (/* binding */ cubehelixLong),
/* harmony export */   interpolateDate: () => (/* binding */ date),
/* harmony export */   interpolateDiscrete: () => (/* binding */ discrete),
/* harmony export */   interpolateHcl: () => (/* binding */ hcl$1),
/* harmony export */   interpolateHclLong: () => (/* binding */ hclLong),
/* harmony export */   interpolateHsl: () => (/* binding */ hsl$1),
/* harmony export */   interpolateHslLong: () => (/* binding */ hslLong),
/* harmony export */   interpolateHue: () => (/* binding */ hue$1),
/* harmony export */   interpolateLab: () => (/* binding */ lab),
/* harmony export */   interpolateNumber: () => (/* binding */ number),
/* harmony export */   interpolateNumberArray: () => (/* binding */ numberArray),
/* harmony export */   interpolateObject: () => (/* binding */ object),
/* harmony export */   interpolateRgb: () => (/* binding */ rgb),
/* harmony export */   interpolateRgbBasis: () => (/* binding */ rgbBasis),
/* harmony export */   interpolateRgbBasisClosed: () => (/* binding */ rgbBasisClosed),
/* harmony export */   interpolateRound: () => (/* binding */ round),
/* harmony export */   interpolateString: () => (/* binding */ string),
/* harmony export */   interpolateTransformCss: () => (/* binding */ interpolateTransformCss),
/* harmony export */   interpolateTransformSvg: () => (/* binding */ interpolateTransformSvg),
/* harmony export */   interpolateZoom: () => (/* binding */ zoom),
/* harmony export */   piecewise: () => (/* binding */ piecewise),
/* harmony export */   quantize: () => (/* binding */ quantize)
/* harmony export */ });
/* harmony import */ var _d3_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
    t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis$1(values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
      v1 = values[i],
      v2 = values[i + 1],
      v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
      v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
function basisClosed(values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
      v0 = values[(i + n - 1) % n],
      v1 = values[i % n],
      v2 = values[(i + 1) % n],
      v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
var constant = function constant(x) {
  return function () {
    return x;
  };
};
function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}
function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}
var rgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start, end) {
    var r = color2((start = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.rgb)(start)).r, (end = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.rgb)(end)).r),
      g = color2(start.g, end.g),
      b = color2(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
      r = new Array(n),
      g = new Array(n),
      b = new Array(n),
      i,
      color2;
    for (i = 0; i < n; ++i) {
      color2 = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.rgb)(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function (t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis$1);
var rgbBasisClosed = rgbSpline(basisClosed);
function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
    c = b.slice(),
    i;
  return function (t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function array(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0,
    na = a ? Math.min(nb, a.length) : 0,
    x = new Array(na),
    c = new Array(nb),
    i;
  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function (t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}
function date(a, b) {
  var d = new Date();
  return a = +a, b = +b, function (t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
function number(a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {},
    c = {},
    k;
  if (a === null || _typeof(a) !== "object") a = {};
  if (b === null || _typeof(b) !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function (t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  reB = new RegExp(reA.source, "g");
function zero(b) {
  return function () {
    return b;
  };
}
function one(b) {
  return function (t) {
    return b(t) + "";
  };
}
function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
    am,
    bm,
    bs,
    i = -1,
    s = [],
    q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({
        i: i,
        x: number(am, bm)
      });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function value(a, b) {
  var t = _typeof(b),
    c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? number : t === "string" ? (c = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.color)(b)) ? (b = c, rgb) : string : b instanceof _d3_color_js__WEBPACK_IMPORTED_MODULE_0__.color ? rgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : number)(a, b);
}
function discrete(range) {
  var n = range.length;
  return function (t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
function hue$1(a, b) {
  var i = hue(+a, +b);
  return function (t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
}
function round(a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}
var svgNode;
function parseCss(value2) {
  var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value2 + "");
  return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value2) {
  if (value2 == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value2);
  if (!(value2 = svgNode.transform.baseVal.consolidate())) return identity;
  value2 = value2.matrix;
  return decompose(value2.a, value2.b, value2.c, value2.d, value2.e, value2.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({
        i: i - 4,
        x: number(xa, xb)
      }, {
        i: i - 2,
        x: number(ya, yb)
      });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360;
      q.push({
        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
        x: number(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
        x: number(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: number(xa, xb)
      }, {
        i: i - 2,
        x: number(ya, yb)
      });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function (a, b) {
    var s = [],
      q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function (t) {
      var i = -1,
        n = q.length,
        o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var zoom = function zoomRho(rho, rho2, rho4) {
  function zoom2(p0, p1) {
    var ux0 = p0[0],
      uy0 = p0[1],
      w0 = p0[2],
      ux1 = p1[0],
      uy1 = p1[1],
      w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function i(t) {
        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
      };
    } else {
      var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function i(t) {
        var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom2.rho = function (_) {
    var _1 = Math.max(1e-3, +_),
      _2 = _1 * _1,
      _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom2;
}(Math.SQRT2, 2, 4);
function hsl(hue2) {
  return function (start, end) {
    var h = hue2((start = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.hsl)(start)).h, (end = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.hsl)(end)).h),
      s = nogamma(start.s, end.s),
      l = nogamma(start.l, end.l),
      opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}
var hsl$1 = hsl(hue);
var hslLong = hsl(nogamma);
function lab(start, end) {
  var l = nogamma((start = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.lab)(start)).l, (end = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.lab)(end)).l),
    a = nogamma(start.a, end.a),
    b = nogamma(start.b, end.b),
    opacity = nogamma(start.opacity, end.opacity);
  return function (t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}
function hcl(hue2) {
  return function (start, end) {
    var h = hue2((start = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.hcl)(start)).h, (end = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.hcl)(end)).h),
      c = nogamma(start.c, end.c),
      l = nogamma(start.l, end.l),
      opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}
var hcl$1 = hcl(hue);
var hclLong = hcl(nogamma);
function cubehelix(hue2) {
  return function cubehelixGamma(y) {
    y = +y;
    function cubehelix2(start, end) {
      var h = hue2((start = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.cubehelix)(start)).h, (end = (0,_d3_color_js__WEBPACK_IMPORTED_MODULE_0__.cubehelix)(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }
    cubehelix2.gamma = cubehelixGamma;
    return cubehelix2;
  }(1);
}
var cubehelix$1 = cubehelix(hue);
var cubehelixLong = cubehelix(nogamma);
function piecewise(interpolate, values) {
  if (values === void 0) values = interpolate, interpolate = value;
  var i = 0,
    n = values.length - 1,
    v = values[0],
    I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function (t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}
function quantize(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color),
/* harmony export */   cubehelix: () => (/* binding */ cubehelix),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   gray: () => (/* binding */ gray),
/* harmony export */   hcl: () => (/* binding */ hcl),
/* harmony export */   hsl: () => (/* binding */ hsl),
/* harmony export */   lab: () => (/* binding */ lab),
/* harmony export */   lch: () => (/* binding */ lch),
/* harmony export */   rgb: () => (/* binding */ rgb)
/* harmony export */ });
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
function Color() {}
var _darker = 0.7;
var _brighter = 1 / _darker;
var reI = "\\s*([+-]?\\d+)\\s*",
  reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  reHex = /^#([0-9a-f]{3,8})$/,
  reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
  reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
  reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
  reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
  reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
  reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy: function copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
    g = o.g / 255,
    b = o.b / 255,
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    h = NaN,
    s = max - min,
    l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
      s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
      l = this.l,
      m2 = l + (l < 0.5 ? l : 1 - l) * s,
      m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function formatHsl() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;
var K = 18,
  Xn = 0.96422,
  Yn = 1,
  Zn = 0.82521,
  t0 = 4 / 29,
  t1 = 6 / 29,
  t2 = 3 * t1 * t1,
  t3 = t1 * t1 * t1;
function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r),
    g = rgb2lrgb(o.g),
    b = rgb2lrgb(o.b),
    y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
    x,
    z;
  if (r === g && g === b) x = z = y;else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}
function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}
define(Lab, lab, extend(Color, {
  brighter: function brighter(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function darker(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function rgb() {
    var y = (this.l + 16) / 116,
      x = isNaN(this.a) ? y : y + this.a / 500,
      z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.033454 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
  return 255 * (x <= 31308e-7 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}
function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define(Hcl, hcl, extend(Color, {
  brighter: function brighter(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function darker(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function rgb() {
    return hcl2lab(this).rgb();
  }
}));
var A = -0.14861,
  B = 1.78277,
  C = -0.29227,
  D = -0.90649,
  E = 1.97294,
  ED = E * D,
  EB = E * B,
  BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
    g = o.g / 255,
    b = o.b / 255,
    l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
    bl = b - l,
    k = (E * (g - l) - C * bl) / D,
    s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
    h = s ? Math.atan2(k, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Cubehelix, cubehelix, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians,
      l = +this.l,
      a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
      cosh = Math.cos(h),
      sinh = Math.sin(h);
    return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatSpecifier: () => (/* binding */ FormatSpecifier),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDefaultLocale: () => (/* binding */ defaultLocale),
/* harmony export */   formatLocale: () => (/* binding */ formatLocale),
/* harmony export */   formatPrefix: () => (/* binding */ formatPrefix),
/* harmony export */   formatSpecifier: () => (/* binding */ formatSpecifier),
/* harmony export */   precisionFixed: () => (/* binding */ precisionFixed),
/* harmony export */   precisionPrefix: () => (/* binding */ precisionPrefix),
/* harmony export */   precisionRound: () => (/* binding */ precisionRound)
/* harmony export */ });
function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null;
  var i,
    coefficient = x.slice(0, i);
  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}
function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function (value, width) {
    var i = value.length,
      t = [],
      j = 0,
      g = grouping[0],
      length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent2 = d[1],
    i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1,
    n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}
function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
var formatTypes = {
  "%": function _(x, p) {
    return (x * 100).toFixed(p);
  },
  b: function b(x) {
    return Math.round(x).toString(2);
  },
  c: function c(x) {
    return x + "";
  },
  d: formatDecimal,
  e: function e(x, p) {
    return x.toExponential(p);
  },
  f: function f(x, p) {
    return x.toFixed(p);
  },
  g: function g(x, p) {
    return x.toPrecision(p);
  },
  o: function o(x) {
    return Math.round(x).toString(8);
  },
  p: function p(x, _p) {
    return formatRounded(x * 100, _p);
  },
  r: formatRounded,
  s: formatPrefixAuto,
  X: function X(x) {
    return Math.round(x).toString(16).toUpperCase();
  },
  x: function x(_x) {
    return Math.round(_x).toString(16);
  }
};
function identity(x) {
  return x;
}
var map = Array.prototype.map,
  prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""),
    currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "",
    currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "",
    decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "",
    numerals = locale2.numerals === void 0 ? identity : formatNumerals(map.call(locale2.numerals, String)),
    percent = locale2.percent === void 0 ? "%" : locale2.percent + "",
    minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "",
    nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill,
      align = specifier.align,
      sign = specifier.sign,
      symbol = specifier.symbol,
      zero = specifier.zero,
      width = specifier.width,
      comma = specifier.comma,
      precision = specifier.precision,
      trim = specifier.trim,
      type = specifier.type;
    if (type === "n") comma = true, type = "g";else if (!formatTypes[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
      suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type],
      maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix,
        valueSuffix = suffix,
        i,
        n,
        c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim(value);
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero) value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length,
        padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function () {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
      e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
      k = Math.pow(10, -e),
      prefix = prefixes[8 + e / 3];
    return function (value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   timeDay: () => (/* binding */ day),
/* harmony export */   timeDays: () => (/* binding */ days),
/* harmony export */   timeFriday: () => (/* binding */ friday),
/* harmony export */   timeFridays: () => (/* binding */ fridays),
/* harmony export */   timeHour: () => (/* binding */ hour),
/* harmony export */   timeHours: () => (/* binding */ hours),
/* harmony export */   timeInterval: () => (/* binding */ newInterval),
/* harmony export */   timeMillisecond: () => (/* binding */ millisecond),
/* harmony export */   timeMilliseconds: () => (/* binding */ milliseconds),
/* harmony export */   timeMinute: () => (/* binding */ minute),
/* harmony export */   timeMinutes: () => (/* binding */ minutes),
/* harmony export */   timeMonday: () => (/* binding */ monday),
/* harmony export */   timeMondays: () => (/* binding */ mondays),
/* harmony export */   timeMonth: () => (/* binding */ month),
/* harmony export */   timeMonths: () => (/* binding */ months),
/* harmony export */   timeSaturday: () => (/* binding */ saturday),
/* harmony export */   timeSaturdays: () => (/* binding */ saturdays),
/* harmony export */   timeSecond: () => (/* binding */ second),
/* harmony export */   timeSeconds: () => (/* binding */ seconds),
/* harmony export */   timeSunday: () => (/* binding */ sunday),
/* harmony export */   timeSundays: () => (/* binding */ sundays),
/* harmony export */   timeThursday: () => (/* binding */ thursday),
/* harmony export */   timeThursdays: () => (/* binding */ thursdays),
/* harmony export */   timeTickInterval: () => (/* binding */ timeTickInterval),
/* harmony export */   timeTicks: () => (/* binding */ timeTicks),
/* harmony export */   timeTuesday: () => (/* binding */ tuesday),
/* harmony export */   timeTuesdays: () => (/* binding */ tuesdays),
/* harmony export */   timeWednesday: () => (/* binding */ wednesday),
/* harmony export */   timeWednesdays: () => (/* binding */ wednesdays),
/* harmony export */   timeWeek: () => (/* binding */ sunday),
/* harmony export */   timeWeeks: () => (/* binding */ sundays),
/* harmony export */   timeYear: () => (/* binding */ year),
/* harmony export */   timeYears: () => (/* binding */ years),
/* harmony export */   utcDay: () => (/* binding */ utcDay),
/* harmony export */   utcDays: () => (/* binding */ utcDays),
/* harmony export */   utcFriday: () => (/* binding */ utcFriday),
/* harmony export */   utcFridays: () => (/* binding */ utcFridays),
/* harmony export */   utcHour: () => (/* binding */ utcHour),
/* harmony export */   utcHours: () => (/* binding */ utcHours),
/* harmony export */   utcMillisecond: () => (/* binding */ millisecond),
/* harmony export */   utcMilliseconds: () => (/* binding */ milliseconds),
/* harmony export */   utcMinute: () => (/* binding */ utcMinute),
/* harmony export */   utcMinutes: () => (/* binding */ utcMinutes),
/* harmony export */   utcMonday: () => (/* binding */ utcMonday),
/* harmony export */   utcMondays: () => (/* binding */ utcMondays),
/* harmony export */   utcMonth: () => (/* binding */ utcMonth),
/* harmony export */   utcMonths: () => (/* binding */ utcMonths),
/* harmony export */   utcSaturday: () => (/* binding */ utcSaturday),
/* harmony export */   utcSaturdays: () => (/* binding */ utcSaturdays),
/* harmony export */   utcSecond: () => (/* binding */ second),
/* harmony export */   utcSeconds: () => (/* binding */ seconds),
/* harmony export */   utcSunday: () => (/* binding */ utcSunday),
/* harmony export */   utcSundays: () => (/* binding */ utcSundays),
/* harmony export */   utcThursday: () => (/* binding */ utcThursday),
/* harmony export */   utcThursdays: () => (/* binding */ utcThursdays),
/* harmony export */   utcTickInterval: () => (/* binding */ utcTickInterval),
/* harmony export */   utcTicks: () => (/* binding */ utcTicks),
/* harmony export */   utcTuesday: () => (/* binding */ utcTuesday),
/* harmony export */   utcTuesdays: () => (/* binding */ utcTuesdays),
/* harmony export */   utcWednesday: () => (/* binding */ utcWednesday),
/* harmony export */   utcWednesdays: () => (/* binding */ utcWednesdays),
/* harmony export */   utcWeek: () => (/* binding */ utcSunday),
/* harmony export */   utcWeeks: () => (/* binding */ utcSundays),
/* harmony export */   utcYear: () => (/* binding */ utcYear),
/* harmony export */   utcYears: () => (/* binding */ utcYears)
/* harmony export */ });
/* harmony import */ var _d3_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var t0 = new Date(),
  t1 = new Date();
function newInterval(floori, offseti, count, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
  }
  interval.floor = function (date) {
    return floori(date = new Date(+date)), date;
  };
  interval.ceil = function (date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = function (date) {
    var d0 = interval(date),
      d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = function (date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = function (start, stop, step) {
    var range = [],
      previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start); while (previous < start && start < stop);
    return range;
  };
  interval.filter = function (test) {
    return newInterval(function (date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function (date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {}
        } else while (--step >= 0) {
          while (offseti(date, 1), !test(date)) {}
        }
      }
    });
  };
  if (count) {
    interval.count = function (start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = function (step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
        return field(d) % step === 0;
      } : function (d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }
  return interval;
}
var millisecond = newInterval(function () {}, function (date, step) {
  date.setTime(+date + step);
}, function (start, end) {
  return end - start;
});
millisecond.every = function (k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function (date) {
    date.setTime(Math.floor(date / k) * k);
  }, function (date, step) {
    date.setTime(+date + step * k);
  }, function (start, end) {
    return (end - start) / k;
  });
};
var milliseconds = millisecond.range;
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;
var second = newInterval(function (date) {
  date.setTime(date - date.getMilliseconds());
}, function (date, step) {
  date.setTime(+date + step * durationSecond);
}, function (start, end) {
  return (end - start) / durationSecond;
}, function (date) {
  return date.getUTCSeconds();
});
var seconds = second.range;
var minute = newInterval(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function (date, step) {
  date.setTime(+date + step * durationMinute);
}, function (start, end) {
  return (end - start) / durationMinute;
}, function (date) {
  return date.getMinutes();
});
var minutes = minute.range;
var hour = newInterval(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function (date, step) {
  date.setTime(+date + step * durationHour);
}, function (start, end) {
  return (end - start) / durationHour;
}, function (date) {
  return date.getHours();
});
var hours = hour.range;
var day = newInterval(function (date) {
  return date.setHours(0, 0, 0, 0);
}, function (date, step) {
  return date.setDate(date.getDate() + step);
}, function (start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function (date) {
  return date.getDate() - 1;
});
var days = day.range;
function weekday(i) {
  return newInterval(function (date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function (start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;
var month = newInterval(function (date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setMonth(date.getMonth() + step);
}, function (start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function (date) {
  return date.getMonth();
});
var months = month.range;
var year = newInterval(function (date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function (start, end) {
  return end.getFullYear() - start.getFullYear();
}, function (date) {
  return date.getFullYear();
});
year.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};
var years = year.range;
var utcMinute = newInterval(function (date) {
  date.setUTCSeconds(0, 0);
}, function (date, step) {
  date.setTime(+date + step * durationMinute);
}, function (start, end) {
  return (end - start) / durationMinute;
}, function (date) {
  return date.getUTCMinutes();
});
var utcMinutes = utcMinute.range;
var utcHour = newInterval(function (date) {
  date.setUTCMinutes(0, 0, 0);
}, function (date, step) {
  date.setTime(+date + step * durationHour);
}, function (start, end) {
  return (end - start) / durationHour;
}, function (date) {
  return date.getUTCHours();
});
var utcHours = utcHour.range;
var utcDay = newInterval(function (date) {
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function (start, end) {
  return (end - start) / durationDay;
}, function (date) {
  return date.getUTCDate() - 1;
});
var utcDays = utcDay.range;
function utcWeekday(i) {
  return newInterval(function (date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function (start, end) {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;
var utcMonth = newInterval(function (date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function (start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function (date) {
  return date.getUTCMonth();
});
var utcMonths = utcMonth.range;
var utcYear = newInterval(function (date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function (start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function (date) {
  return date.getUTCFullYear();
});
utcYear.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};
var utcYears = utcYear.range;
function ticker(year2, month2, week, day2, hour2, minute2) {
  var tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute2, 1, durationMinute], [minute2, 5, 5 * durationMinute], [minute2, 15, 15 * durationMinute], [minute2, 30, 30 * durationMinute], [hour2, 1, durationHour], [hour2, 3, 3 * durationHour], [hour2, 6, 6 * durationHour], [hour2, 12, 12 * durationHour], [day2, 1, durationDay], [day2, 2, 2 * durationDay], [week, 1, durationWeek], [month2, 1, durationMonth], [month2, 3, 3 * durationMonth], [year2, 1, durationYear]];
  function ticks(start, stop, count) {
    var reverse = stop < start;
    if (reverse) {
      var _ref = [stop, start];
      start = _ref[0];
      stop = _ref[1];
    }
    var interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    var ticks2 = interval ? interval.range(start, +stop + 1) : [];
    return reverse ? ticks2.reverse() : ticks2;
  }
  function tickInterval(start, stop, count) {
    var target = Math.abs(stop - start) / count;
    var i = (0,_d3_array_js__WEBPACK_IMPORTED_MODULE_0__.bisector)(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 3),
        step2 = _ref3[2];
      return step2;
    }).right(tickIntervals, target);
    if (i === tickIntervals.length) return year2.every((0,_d3_array_js__WEBPACK_IMPORTED_MODULE_0__.tickStep)(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max((0,_d3_array_js__WEBPACK_IMPORTED_MODULE_0__.tickStep)(start, stop, count), 1));
    var _tickIntervals = _slicedToArray(tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i], 2),
      t = _tickIntervals[0],
      step = _tickIntervals[1];
    return t.every(step);
  }
  return [ticks, tickInterval];
}
var _ticker = ticker(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute),
  _ticker2 = _slicedToArray(_ticker, 2),
  utcTicks = _ticker2[0],
  utcTickInterval = _ticker2[1];
var _ticker3 = ticker(year, month, sunday, day, hour, minute),
  _ticker4 = _slicedToArray(_ticker3, 2),
  timeTicks = _ticker4[0],
  timeTickInterval = _ticker4[1];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isoFormat: () => (/* binding */ formatIso),
/* harmony export */   isoParse: () => (/* binding */ parseIso),
/* harmony export */   timeFormat: () => (/* binding */ timeFormat),
/* harmony export */   timeFormatDefaultLocale: () => (/* binding */ defaultLocale),
/* harmony export */   timeFormatLocale: () => (/* binding */ formatLocale),
/* harmony export */   timeParse: () => (/* binding */ timeParse),
/* harmony export */   utcFormat: () => (/* binding */ utcFormat),
/* harmony export */   utcParse: () => (/* binding */ utcParse)
/* harmony export */ });
/* harmony import */ var _d3_time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
  return {
    y: y,
    m: m,
    d: d,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}
function formatLocale(locale2) {
  var locale_dateTime = locale2.dateTime,
    locale_date = locale2.date,
    locale_time = locale2.time,
    locale_periods = locale2.periods,
    locale_weekdays = locale2.days,
    locale_shortWeekdays = locale2.shortDays,
    locale_months = locale2.months,
    locale_shortMonths = locale2.shortMonths;
  var periodRe = formatRe(locale_periods),
    periodLookup = formatLookup(locale_periods),
    weekdayRe = formatRe(locale_weekdays),
    weekdayLookup = formatLookup(locale_weekdays),
    shortWeekdayRe = formatRe(locale_shortWeekdays),
    shortWeekdayLookup = formatLookup(locale_shortWeekdays),
    monthRe = formatRe(locale_months),
    monthLookup = formatLookup(locale_months),
    shortMonthRe = formatRe(locale_shortMonths),
    shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    a: formatShortWeekday,
    A: formatWeekday,
    b: formatShortMonth,
    B: formatMonth,
    c: null,
    d: formatDayOfMonth,
    e: formatDayOfMonth,
    f: formatMicroseconds,
    g: formatYearISO,
    G: formatFullYearISO,
    H: formatHour24,
    I: formatHour12,
    j: formatDayOfYear,
    L: formatMilliseconds,
    m: formatMonthNumber,
    M: formatMinutes,
    p: formatPeriod,
    q: formatQuarter,
    Q: formatUnixTimestamp,
    s: formatUnixTimestampSeconds,
    S: formatSeconds,
    u: formatWeekdayNumberMonday,
    U: formatWeekNumberSunday,
    V: formatWeekNumberISO,
    w: formatWeekdayNumberSunday,
    W: formatWeekNumberMonday,
    x: null,
    X: null,
    y: formatYear,
    Y: formatFullYear,
    Z: formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    a: formatUTCShortWeekday,
    A: formatUTCWeekday,
    b: formatUTCShortMonth,
    B: formatUTCMonth,
    c: null,
    d: formatUTCDayOfMonth,
    e: formatUTCDayOfMonth,
    f: formatUTCMicroseconds,
    g: formatUTCYearISO,
    G: formatUTCFullYearISO,
    H: formatUTCHour24,
    I: formatUTCHour12,
    j: formatUTCDayOfYear,
    L: formatUTCMilliseconds,
    m: formatUTCMonthNumber,
    M: formatUTCMinutes,
    p: formatUTCPeriod,
    q: formatUTCQuarter,
    Q: formatUnixTimestamp,
    s: formatUnixTimestampSeconds,
    S: formatUTCSeconds,
    u: formatUTCWeekdayNumberMonday,
    U: formatUTCWeekNumberSunday,
    V: formatUTCWeekNumberISO,
    w: formatUTCWeekdayNumberSunday,
    W: formatUTCWeekNumberMonday,
    x: null,
    X: null,
    y: formatUTCYear,
    Y: formatUTCFullYear,
    Z: formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    a: parseShortWeekday,
    A: parseWeekday,
    b: parseShortMonth,
    B: parseMonth,
    c: parseLocaleDateTime,
    d: parseDayOfMonth,
    e: parseDayOfMonth,
    f: parseMicroseconds,
    g: parseYear,
    G: parseFullYear,
    H: parseHour24,
    I: parseHour24,
    j: parseDayOfYear,
    L: parseMilliseconds,
    m: parseMonthNumber,
    M: parseMinutes,
    p: parsePeriod,
    q: parseQuarter,
    Q: parseUnixTimestamp,
    s: parseUnixTimestampSeconds,
    S: parseSeconds,
    u: parseWeekdayNumberMonday,
    U: parseWeekNumberSunday,
    V: parseWeekNumberISO,
    w: parseWeekdayNumberSunday,
    W: parseWeekNumberMonday,
    x: parseLocaleDate,
    X: parseLocaleTime,
    y: parseYear,
    Y: parseFullYear,
    Z: parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function (date) {
      var string = [],
        i = -1,
        j = 0,
        n = specifier.length,
        c,
        pad2,
        format;
      if (!(date instanceof Date)) date = new Date(+date);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad2 = c === "e" ? " " : "0";
          if (format = formats2[c]) c = format(date, pad2);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate(1900, void 0, 1),
        i = parseSpecifier(d, specifier, string += "", 0),
        week,
        day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcMonday.ceil(week) : (0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcMonday)(week);
          week = _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeMonday.ceil(week) : (0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeMonday)(week);
          week = _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
      n = specifier.length,
      m = string.length,
      c,
      parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function format(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    parse: function parse(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
    utcFormat: function utcFormat(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    utcParse: function utcParse(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function () {
        return specifier;
      };
      return p;
    }
  };
}
var pads = {
    "-": "",
    _: " ",
    "0": "0"
  },
  numberRe = /^\s*\d+/,
  percentRe = /^%/,
  requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
    string = (sign ? -value : value) + "",
    length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map(function (name, i) {
    return [name.toLowerCase(), i];
  }));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeDay.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeYear)(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeSunday.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeYear)(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? (0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeThursday)(d) : _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeThursday.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeYear)(d), d) + ((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeYear)(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeMonday.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeYear)(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? (0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeThursday)(d) : _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcDay.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcYear)(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcSunday.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcYear)(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? (0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcThursday)(d) : _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcThursday.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcYear)(d), d) + ((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcYear)(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcMonday.count((0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcYear)(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? (0,_d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcThursday)(d) : _d3_time_js__WEBPACK_IMPORTED_MODULE_0__.utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}
var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date) {
  return date.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);
function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}
var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var controlEl = document.getElementById('controls');
var resEl = document.getElementById('result');
var REL_API_URL = 'http://34.74.175.135';
var TURN_URL = '34.74.175.135:8086';
var engine = new _index_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  autoStart: true,
  downloadApiUrl: "".concat(REL_API_URL, "/__down"),
  uploadApiUrl: "".concat(REL_API_URL, "/__up"),
  logMeasurementApiUrl: null,
  logAimApiUrl: null,
  //'https://aim.cloudflare.com/__log',
  turnServerUri: TURN_URL,
  turnServerCredsApiUrl: null,
  //`${REL_API_URL}/turn-creds`,
  turnServerUser: 'test',
  turnServerPass: 'test',
  rpkiInvalidHost: null,
  //'invalid.rpki.cloudflare.com',
  cfTraceUrl: null,
  //`${REL_API_URL}/cdn-cgi/trace`,
  includeCredentials: false
});
engine.onRunningChange = function (running) {
  return controlEl.textContent = running ? 'Running...' : 'Finished!';
};
engine.onResultsChange = function (_ref) {
  var type = _ref.type;
  !engine.isFinished && setResult(engine.results.raw);
  console.log(type);
};
engine.onFinish = function (results) {
  setResult(results.getSummary());
  console.log(results.getSummary());
  console.log(results.getScores());
};
engine.onError = function (e) {
  return console.log(e);
};
function setResult(obj) {
  var resTxt = document.createElement('pre');
  resTxt.textContent = JSON.stringify(obj, null, 2);
  resEl.textContent = '';
  resEl.appendChild(resTxt);
}
})();

/******/ })()
;
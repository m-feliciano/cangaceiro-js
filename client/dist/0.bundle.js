webpackJsonp([0],{

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NegotiationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_negotiation_Negotiation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_exceptions_ApplicationException__ = __webpack_require__(2);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





let NegotiationService = class NegotiationService {
	constructor() {
		this._http = new __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */]();
		this._baseUrl = "http://localhost:3000/negotiations";
	}

	getNegotiationsByWeek() {
		var _this = this;

		return _asyncToGenerator(function* () {
			return yield _this._http.get(`${_this._baseUrl}/week`).then(function (data) {
				return _this._instantiateNegotiation(data);
			}, function () {
				throw new __WEBPACK_IMPORTED_MODULE_2__utils_exceptions_ApplicationException__["a" /* default */]("Unable to get trades from week");
			});
		})();
	}

	getNegotiationsByLastWeek() {
		var _this2 = this;

		return _asyncToGenerator(function* () {
			return yield _this2._http.get(`${_this2._baseUrl}/lastweek`).then(function (data) {
				return _this2._instantiateNegotiation(data);
			}, function () {
				throw new __WEBPACK_IMPORTED_MODULE_2__utils_exceptions_ApplicationException__["a" /* default */]("Unable to get trades from last week");
			});
		})();
	}

	getNegotiationsByBeforeLastWeek() {
		var _this3 = this;

		return _asyncToGenerator(function* () {
			return yield _this3._http.get(`${_this3._baseUrl}/beforelastweek`).then(function (data) {
				return _this3._instantiateNegotiation(data);
			}, function () {
				throw new __WEBPACK_IMPORTED_MODULE_2__utils_exceptions_ApplicationException__["a" /* default */]("Unable to get trades from before last week");
			});
		})();
	}

	_instantiateNegotiation(data) {
		return data.map(obj => new __WEBPACK_IMPORTED_MODULE_1__models_negotiation_Negotiation__["a" /* default */](new Date(obj.date), obj.quantity, obj.value));
	}

	getNegotiationsByPeriod() {
		var _this4 = this;

		return _asyncToGenerator(function* () {
			return yield Promise.all([_this4.getNegotiationsByWeek(), _this4.getNegotiationsByLastWeek(), _this4.getNegotiationsByBeforeLastWeek()]).then(function (period) {
				return period.reduce(function (newArray, item) {
					return newArray.concat(item);
				}, []).sort(function (a, b) {
					return b.date.getTime() - a.date.getTime();
				});
			}).catch(function (err) {
				console.log(err);
				throw new __WEBPACK_IMPORTED_MODULE_2__utils_exceptions_ApplicationException__["a" /* default */]("Unable to get negotiations by period");
			});
		})();
	}
};


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let HttpService = class HttpService {
	get(endpoint) {
		return _asyncToGenerator(function* () {
			const res = yield fetch(endpoint);
			if (!res.ok) {
				throw new Error(res.statusText); // 404
			}
			console.log("Getting negotiations from server...");
			return res.json();
		})();
	}
};


/***/ })

});
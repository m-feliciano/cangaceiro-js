System.register(["../utils/HttpService", "../models/negotiation/Negotiation", "../utils/exceptions/ApplicationException"], function (_export, _context) {
	"use strict";

	var HttpService, Negotiation, ApplicationException;

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	return {
		setters: [function (_utilsHttpService) {
			HttpService = _utilsHttpService.default;
		}, function (_modelsNegotiationNegotiation) {
			Negotiation = _modelsNegotiationNegotiation.default;
		}, function (_utilsExceptionsApplicationException) {
			ApplicationException = _utilsExceptionsApplicationException.default;
		}],
		execute: function () {
			class NegotiationService {
				constructor() {
					this._http = new HttpService();
					this._baseUrl = "http://localhost:3000/negotiations";
				}

				getNegotiationsByWeek() {
					var _this = this;

					return _asyncToGenerator(function* () {
						return yield _this._http.get(`${_this._baseUrl}/week`).then(function (data) {
							return _this._instantiateNegotiation(data);
						}, function () {
							throw new ApplicationException("Unable to get trades from week");
						});
					})();
				}

				getNegotiationsByLastWeek() {
					var _this2 = this;

					return _asyncToGenerator(function* () {
						return yield _this2._http.get(`${_this2._baseUrl}/lastweek`).then(function (data) {
							return _this2._instantiateNegotiation(data);
						}, function () {
							throw new ApplicationException("Unable to get trades from last week");
						});
					})();
				}

				getNegotiationsByBeforeLastWeek() {
					var _this3 = this;

					return _asyncToGenerator(function* () {
						return yield _this3._http.get(`${_this3._baseUrl}/beforelastweek`).then(function (data) {
							return _this3._instantiateNegotiation(data);
						}, function () {
							throw new ApplicationException("Unable to get trades from before last week");
						});
					})();
				}

				_instantiateNegotiation(data) {
					return data.map(obj => new Negotiation(new Date(obj.date), obj.quantity, obj.value));
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
							throw new ApplicationException("Unable to get negotiations by period");
						});
					})();
				}
			}

			_export("default", NegotiationService);
		}
	};
});
//# sourceMappingURL=NegotiationService.js.map
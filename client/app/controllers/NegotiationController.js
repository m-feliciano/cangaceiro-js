System.register(["../views/NegotiationsView", "../models/negotiation/Negotiations", "../views/MessageView", "../models/Message", "../services/NegotiationService", "../utils/DaoFactory", "../utils/exceptions/ApplicationException", "../models/negotiation/Negotiation", "../utils/DateConverter", "../utils/Bind"], function (_export, _context) {
	"use strict";

	var NegotiationsView, Negotiations, MessageView, Message, NegotiationService, getNegotiationDAO, getExceptionMessage, Negotiation, DateConverter, Bind;

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
		setters: [function (_viewsNegotiationsView) {
			NegotiationsView = _viewsNegotiationsView.default;
		}, function (_modelsNegotiationNegotiations) {
			Negotiations = _modelsNegotiationNegotiations.default;
		}, function (_viewsMessageView) {
			MessageView = _viewsMessageView.default;
		}, function (_modelsMessage) {
			Message = _modelsMessage.default;
		}, function (_servicesNegotiationService) {
			NegotiationService = _servicesNegotiationService.default;
		}, function (_utilsDaoFactory) {
			getNegotiationDAO = _utilsDaoFactory.getNegotiationDAO;
		}, function (_utilsExceptionsApplicationException) {
			getExceptionMessage = _utilsExceptionsApplicationException.default;
		}, function (_modelsNegotiationNegotiation) {
			Negotiation = _modelsNegotiationNegotiation.default;
		}, function (_utilsDateConverter) {
			DateConverter = _utilsDateConverter.default;
		}, function (_utilsBind) {
			Bind = _utilsBind.default;
		}],
		execute: function () {
			class NegotiationController {
				constructor() {
					const $ = document.querySelector.bind(document);
					this._inputDate = $("#date");
					this._inputQuantity = $("#quantity");
					this._inputValue = $("#value");

					//	creating a new Proxy with support of fabric
					this._negotiations = new Bind(new Negotiations(), new NegotiationsView("#negotiations"), "add", "clear");

					this._message = new Bind(new Message(), new MessageView("#messageView"), "text");

					this._service = new NegotiationService();

					this._init();
				}

				_init() {
					var _this = this;

					return _asyncToGenerator(function* () {
						const dao = yield getNegotiationDAO();
						yield dao.listAll().then(function (negotiations) {
							return negotiations.forEach(function (negotiation) {
								return _this._negotiations.add(negotiation);
							});
						}).catch(function (err) {
							return _this._message.text = err;
						});
					})();
				}

				add(event) {
					var _this2 = this;

					return _asyncToGenerator(function* () {
						try {
							event.preventDefault();

							const negotiation = _this2._createNegotiation();

							const dao = yield getNegotiationDAO();
							yield dao.add(negotiation).then(function () {
								_this2._negotiations.add(_this2._createNegotiation());
								_this2._message.text = "Trading successfully added";
								_this2._clearForm();
							}).catch(function (err) {
								return _this2._message.text = err;
							});
						} catch (err) {
							console.log(err);

							if (err instanceof DateInvalidException) {
								_this2._message.text = err.message;
							} else {
								_this2._message.text = "An unexpected error has occurred you. Contact support ";
							}
						}
					})();
				}

				_clearForm() {
					this._inputDate.value = "";
					this._inputQuantity.value = 1;
					this._inputValue.value = 0.0;
					this._inputDate.focus();
				}

				_createNegotiation() {
					return new Negotiation(DateConverter.toDate(this._inputDate.value), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
				}

				delete() {
					var _this3 = this;

					return _asyncToGenerator(function* () {
						const dao = yield getNegotiationDAO();
						yield dao.deleteAll().then(function () {
							_this3._negotiations.clear();
							_this3._message.text = "Successfully deleted trades";
						}).catch(function () {
							return _this3._message.text = "Successfully deleted all negotiaions";
						});
					})();
				}

				importNegotiations() {
					var _this4 = this;

					return _asyncToGenerator(function* () {
						try {
							const object = yield _this4._service.getNegotiationsByPeriod();
							object.filter(function (newNegotiation) {
								return !_this4._negotiations.toArray().some(function (exists) {
									return newNegotiation.equals(exists);
								});
							}).forEach(function (negotiation) {
								return _this4._negotiations.add(negotiation);
							});

							_this4._message.text = "Successfully imported negotiations by period";
						} catch (err) {
							_this4._message.text = getExceptionMessage(err);
						}
					})();
				}
			}

			_export("default", NegotiationController);
		}
	};
});
//# sourceMappingURL=NegotiationController.js.map
System.register(["./ConnectionFactory", "../models/negotiation/NegotiationDAO"], function (_export, _context) {
	"use strict";

	var ConnectionFactory, NegotiationDAO;
	return {
		setters: [function (_ConnectionFactory) {
			ConnectionFactory = _ConnectionFactory.ConnectionFactory;
		}, function (_modelsNegotiationNegotiationDAO) {
			NegotiationDAO = _modelsNegotiationNegotiationDAO.default;
		}],
		execute: function () {
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

			let getNegotiationDAO = (() => {
				var _ref = _asyncToGenerator(function* () {
					return yield ConnectionFactory.getConnection().then(function (conn) {
						return new NegotiationDAO(conn);
					});
				});

				return function getNegotiationDAO() {
					return _ref.apply(this, arguments);
				};
			})();

			_export("getNegotiationDAO", getNegotiationDAO);
		}
	};
});
//# sourceMappingURL=DaoFactory.js.map
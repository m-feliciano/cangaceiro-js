System.register([], function (_export, _context) {
	"use strict";

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
		setters: [],
		execute: function () {
			class HttpService {
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
			}

			_export("default", HttpService);
		}
	};
});
//# sourceMappingURL=HttpService.js.map
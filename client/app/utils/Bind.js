System.register(["./ProxyFactory"], function (_export, _context) {
	"use strict";

	var ProxyFactory;
	return {
		setters: [function (_ProxyFactory) {
			ProxyFactory = _ProxyFactory.default;
		}],
		execute: function () {
			class Bind {
				constructor(model, view, ...props) {
					const proxy = ProxyFactory.create(model, props, model => {
						view.update(model);
					});
					view.update(model);
					return proxy;
				}
			}

			_export("default", Bind);
		}
	};
});
//# sourceMappingURL=Bind.js.map
System.register([], function (_export, _context) {
	"use strict";

	return {
		setters: [],
		execute: function () {
			class View {
				constructor(selector) {
					this._element = document.querySelector(selector);
				}
				update(model) {
					this._element.innerHTML = this.template(model);
				}

				template(model) {
					throw new Error("ERR: You must implement the template method");
				}
			}

			_export("default", View);
		}
	};
});
//# sourceMappingURL=View.js.map
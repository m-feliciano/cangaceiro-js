System.register([], function (_export, _context) {
	"use strict";

	return {
		setters: [],
		execute: function () {
			class Negotiations {
				constructor() {
					this._negotiations = [];
					Object.freeze(this);
				}
				add(negotiation) {
					this._negotiations.push(negotiation);
				}

				toArray() {
					return this._negotiations.slice();
				}

				get volumeTotal() {
					return this._negotiations.reduce((actual, y) => actual += y.volume, 0);
				}
				clear() {
					this._negotiations.length = 0;
				}
			}

			_export("default", Negotiations);
		}
	};
});
//# sourceMappingURL=Negotiations.js.map
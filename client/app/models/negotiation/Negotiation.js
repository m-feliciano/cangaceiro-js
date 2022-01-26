System.register([], function (_export, _context) {
	"use strict";

	return {
		setters: [],
		execute: function () {
			class Negotiation {
				constructor(_date, _quantity, _value) {
					Object.assign(this, { _quantity, _value });
					this._date = new Date(_date.getTime());
					Object.freeze(this);
				}

				get volume() {
					return this._quantity * this._value;
				}

				get date() {
					return new Date(this._date.getTime());
				}

				get quantity() {
					return this._quantity;
				}

				get value() {
					return this._value;
				}

				equals(negotiation) {
					return JSON.stringify(this) === JSON.stringify(negotiation);
				}
			}

			_export("default", Negotiation);
		}
	};
});
//# sourceMappingURL=Negotiation.js.map
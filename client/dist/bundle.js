webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_theme_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_theme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_theme_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_negotiation_Negotiation__ = __webpack_require__(4);





const negotiation = new __WEBPACK_IMPORTED_MODULE_2__models_negotiation_Negotiation__["a" /* default */](new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const body = JSON.stringify(negotiation);
const method = "POST";

const config = {
	method,
	headers,
	body
};

const url = 'http://localhost:3000/negotiations';

fetch(url, config).then(() => console.log('Successfully sent data'));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negotiation; });
let Negotiation = class Negotiation {
	constructor(_date = required('date'), _quantity = required('quantity'), _value = required('value')) {
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
		return JSON.stringify(this) == JSON.stringify(negotiation);
	}
};


/***/ })
],[1]);
//# sourceMappingURL=sockjs.js.map
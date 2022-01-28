webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negotiation; });
let Negotiation = class Negotiation {
	constructor(_inputDate = required('date'), _quantity = required('quantity'), _value = required('value')) {
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationException; });
/* unused harmony export isApplicationException */
/* unused harmony export getExceptionMessage */
let ApplicationException = class ApplicationException extends Error {
	constructor(msg = "") {
		super(msg);
		this.name = this.constructor.name;
	}
};



const exception = ApplicationException;
function isApplicationException(err) {
	return err instanceof exception || Object.getPrototypeOf(err) instanceof exception;
}

function getExceptionMessage(err) {
	if (isApplicationException(err)) {
		return err.message;
	} else {
		console.log(err);
		return "Cannot done operation";
	}
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
let View = class View {
	constructor(selector) {
		this._element = document.querySelector(selector);
	}
	update(model) {
		this._element.innerHTML = this.template(model);
	}

	template(model) {
		throw new Error("ERR: You must implement the template method");
	}
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = required;
function required(param) {
    throw new Error(`${param} is a param required`);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_theme_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_theme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_theme_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_NegotiationController__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_negotiation_Negotiation_js__ = __webpack_require__(1);






const ctrl = new __WEBPACK_IMPORTED_MODULE_2__controllers_NegotiationController__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["ctrl"] = ctrl;


const negotiation = new __WEBPACK_IMPORTED_MODULE_3__models_negotiation_Negotiation_js__["a" /* default */](new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const body = JSON.stringify(negotiation);
const method = "POST";

const config = {
	method,
	headers,
	body
};

fetch('http://localhost:3000/negotiations', config).then(() => console.log('Successfully sent data'));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegotiationController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_NegotiationsView__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_negotiation_Negotiations__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_MessageView__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Message__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_DaoFactory__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_exceptions_ApplicationException__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_negotiation_Negotiation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_DateConverter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_Bind__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_decorators_Debounce_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_decorators_Controller_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_Required_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_decorators_BindEvent_js__ = __webpack_require__(22);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value2, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}















let NegotiationController = (_dec = Object(__WEBPACK_IMPORTED_MODULE_10__utils_decorators_Controller_js__["a" /* controller */])('#date', '#quantity', '#value'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_12__utils_decorators_BindEvent_js__["a" /* bindEvent */])('submit', '.form'), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_9__utils_decorators_Debounce_js__["a" /* debounce */])(), _dec4 = Object(__WEBPACK_IMPORTED_MODULE_12__utils_decorators_BindEvent_js__["a" /* bindEvent */])('click', '#delete-button'), _dec5 = Object(__WEBPACK_IMPORTED_MODULE_12__utils_decorators_BindEvent_js__["a" /* bindEvent */])('click', '#import-button'), _dec6 = Object(__WEBPACK_IMPORTED_MODULE_9__utils_decorators_Debounce_js__["a" /* debounce */])(), _dec(_class = (_class2 = class NegotiationController {
	constructor(_inputDate, _quantity, _value) {
		Object.assign(this, { _inputDate, _quantity, _value });

		//	creating a new Proxy with support of fabric
		this._negotiations = new __WEBPACK_IMPORTED_MODULE_8__utils_Bind__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__models_negotiation_Negotiations__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__views_NegotiationsView__["a" /* default */]("#negotiations"), "add", "clear");

		this._message = new __WEBPACK_IMPORTED_MODULE_8__utils_Bind__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_3__models_Message__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_2__views_MessageView__["a" /* default */]("#messageView"), "text");

		this._init();
	}

	_init() {
		var _this = this;

		return _asyncToGenerator(function* () {
			try {
				const dao = yield Object(__WEBPACK_IMPORTED_MODULE_4__utils_DaoFactory__["a" /* getNegotiationDAO */])();
				yield dao.listAll().then(function (negotiations) {
					return negotiations.forEach(function (negotiation) {
						return _this._negotiations.add(negotiation);
					});
				});
			} catch (err) {
				_this._message.text = Object(__WEBPACK_IMPORTED_MODULE_5__utils_exceptions_ApplicationException__["a" /* default */])(err);
			}
		})();
	}

	add(event) {
		var _this2 = this;

		return _asyncToGenerator(function* () {
			try {
				event.preventDefault();

				const negotiation = _this2._createNegotiation();

				const dao = yield Object(__WEBPACK_IMPORTED_MODULE_4__utils_DaoFactory__["a" /* getNegotiationDAO */])();
				yield dao.add(negotiation).then(function () {
					_this2._negotiations.add(_this2._createNegotiation());
					_this2._message.text = "Trading successfully added";
					_this2._clearForm();
				});
			} catch (err) {
				_this2._message.text = Object(__WEBPACK_IMPORTED_MODULE_5__utils_exceptions_ApplicationException__["a" /* default */])(err);
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
		return new __WEBPACK_IMPORTED_MODULE_6__models_negotiation_Negotiation__["a" /* default */](__WEBPACK_IMPORTED_MODULE_7__utils_DateConverter__["a" /* default */].toDate(this._inputDate.value), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
	}

	delete() {
		var _this3 = this;

		return _asyncToGenerator(function* () {
			const dao = yield Object(__WEBPACK_IMPORTED_MODULE_4__utils_DaoFactory__["a" /* getNegotiationDAO */])();
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

				const NegotiationService = yield __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 40));

				const service = new NegotiationService();

				const object = yield service.getNegotiationsByPeriod();
				console.log(object);

				object.filter(function (newNegotiation) {
					return !_this4._negotiations.toArray().some(function (exists) {
						return newNegotiation.equals(exists);
					});
				}).forEach(function (negotiation) {
					return _this4._negotiations.add(negotiation);
				});

				_this4._message.text = "Successfully imported negotiations by period";
			} catch (err) {
				_this4._message.text = Object(__WEBPACK_IMPORTED_MODULE_5__utils_exceptions_ApplicationException__["a" /* default */])(err);
			}
		})();
	}
}, (_applyDecoratedDescriptor(_class2.prototype, "add", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "delete", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "delete"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "importNegotiations", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "importNegotiations"), _class2.prototype)), _class2)) || _class);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegotiationsView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(3);


let NegotiationsView = class NegotiationsView extends __WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */] {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
        ${model.toArray().map(negotiation => `
                <tr align="right">
                    <td align="center">${DateConverter.toText(negotiation.date)}</td>
                    <td>${negotiation.quantity}</td>
                    <td>${negotiation.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                    <td>${negotiation.volume.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                </tr>`).join("")}
        </tbody>
        
        <tfoot>
        <tr align="center">
            <td	colspan="3"><strong>TOTAL</strong></td>
            <td align="right"><strong>${model.volumeTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong></td>
			</tr>
        </tfoot>
    </table>`;
    }
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negotiations; });
let Negotiations = class Negotiations {
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
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(3);


let MessageView = class MessageView extends __WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */] {
	template(model) {
		return model.text ? `<p class="alert alert-info" role="alert">${model.text}</p>` : `<p></p>`;
	}
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
let Message = class Message {
	constructor(text = "") {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	set text(text) {
		this._text = text;
	}
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNegotiationDAO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_negotiation_NegotiationDAO__ = __webpack_require__(15);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




let getNegotiationDAO = (() => {
  var _ref = _asyncToGenerator(function* () {
    let conn = yield __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory__["a" /* ConnectionFactory */].getConnection();
    return new __WEBPACK_IMPORTED_MODULE_1__models_negotiation_NegotiationDAO__["a" /* default */](conn);
  });

  return function getNegotiationDAO() {
    return _ref.apply(this, arguments);
  };
})();

// ON CONSOLE
// DaoFactory.getNegotiationDAO().then((dao) => console.log(dao));

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionFactory; });
const stores = ["negotiations"];
let connection = null;
let close = null;

//  factory pattern
let ConnectionFactory = class ConnectionFactory {
	constructor() {
		throw new Error("Cannot instantiate this class");
	}
	static getConnection() {
		return new Promise((resolve, reject) => {
			if (connection) return resolve(connection);
			const openRequest = indexedDB.open("cangaceirojs", 2);

			openRequest.onupgradeneeded = e => {
				ConnectionFactory._createStores(e.target.result);
			};

			openRequest.onsuccess = e => {
				// only will be executed once, on the first connection
				connection = e.target.result;
				// Waiting the original function!
				close = connection.close.bind(connection);

				connection.close = () => {
					throw new Error("You cannot close the connection directly");
				};
				resolve(e.target.result);
			};
			openRequest.onerror = e => {
				console.log(e.target.error);
				reject(e.target.error.name);
			};
		});
	}
	static _createStores(connection) {
		stores.forEach(store => {
			if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);
			connection.createObjectStore(store, { autoIncrement: true });
		});
	}

	// monkey patch: changing the main API
	static closeConnection() {
		if (connection) {
			close();
		}
	}
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegotiationDAO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Negotiation__ = __webpack_require__(1);


let NegotiationDAO = class NegotiationDAO {
	constructor(connection) {
		this._connection = connection;
		this._store = "negotiations";
	}
	add(negotiation) {
		return new Promise((resolve, reject) => {
			const request = this._connection.transaction([this._store], "readwrite").objectStore(this._store).add(negotiation);

			request.onsuccess = e => resolve();
			request.onerror = e => {
				console.log(e.target.error);
				reject("Unable to save negotiation");
			};
		});
	}
	listAll() {
		return new Promise((resolve, reject) => {
			const negotiations = [];

			const cursor = this._connection.transaction([this._store], "readwrite").objectStore(this._store).openCursor();

			cursor.onsuccess = e => {
				const current = e.target.result;

				if (current) {
					const negotiation = new __WEBPACK_IMPORTED_MODULE_0__Negotiation__["a" /* default */](current.value._date, current.value._quantity, current.value._value);
					negotiations.push(negotiation);
					current.continue();
				} else {
					resolve(negotiations);
				}
			};
			cursor.onerror = e => {
				console.log("Error: " + e.target.error);
				reject("Cannot list negotiations");
			};
		});
	}

	deleteAll() {
		return new Promise((resolve, reject) => {
			const request = this._connection.transaction([this._store], "readwrite").objectStore(this._store).clear();
			request.onsuccess = e => resolve();
			request.onerror = e => {
				console.log(e.target.error);
				reject("Unable to delete negotiations");
			};
		});
	}
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_DateInvalidException__ = __webpack_require__(17);


let DateConverter = class DateConverter {
	constructor() {
		throw new Error("WARN: This class cannot be instantiated!");
	}

	static toText(str) {
		return `${str.getDate()}/${str.getMonth() + 1}/${str.getFullYear()}`;
	}

	static toDate(str) {
		if (!str.match(/^\d{4}-\d{2}-\d{2}$/)) {
			throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_DateInvalidException__["a" /* default */]();
		}
		return new Date(...str.split("-").map((item, indice) => item - indice % 2));
	}
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateInvalidException; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ApplicationException__ = __webpack_require__(2);


let DateInvalidException = class DateInvalidException extends __WEBPACK_IMPORTED_MODULE_0__ApplicationException__["a" /* default */] {
    constructor() {
        super("The date must be in dd/mm/yyyy format");
        // fix name error
        this.name = this.constructor.name;
    }
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bind; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProxyFactory__ = __webpack_require__(19);


let Bind = class Bind {
	constructor(model, view, ...props) {
		const proxy = __WEBPACK_IMPORTED_MODULE_0__ProxyFactory__["a" /* default */].create(model, props, model => {
			view.update(model);
		});
		view.update(model);
		return proxy;
	}
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyFactory; });
let ProxyFactory = class ProxyFactory {
	static create(object, props, trigger) {
		return new Proxy(object, {
			get(target, prop, receiver) {
				if (ProxyFactory._isFunction(target[prop]) && props.includes(prop)) {
					return function () {
						console.log(`${prop} trigged`);
						target[prop].apply(target, arguments);
						trigger(target);
					};
				} else {
					return target[prop];
				}
			},
			set(target, prop, value, receiver) {
				const updated = Reflect.set(target, prop, value);

				if (props.includes(prop)) trigger(target);
				return updated;
			}
		});
	}

	static _isFunction(fn) {
		return typeof fn == typeof Function;
	}
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(milissegundos = 500) {

	return function (target, key, descriptor) {

		const defaultMethod = descriptor.value;
		let timer = 0;
		descriptor.value = function (...args) {
			if (event) event.preventDefault();
			clearInterval(timer);
			timer = setTimeout(() => defaultMethod.apply(this, args), milissegundos);
		};
		return descriptor;
	};
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = controller;
function controller(...selectors) {
    const elements = selectors.map(selector => document.querySelector(selector));

    return function (constructor) {
        const defaultContructor = constructor;

        const newConstructor = function () {

            const instance = new defaultContructor(...elements);
            Object.getOwnPropertyNames(defaultContructor.prototype).forEach(property => {
                if (Reflect.hasMetadata('bindEvent', instance, property)) {
                    associateEvent(instance, Reflect.getMetadata('bindEvent', instance, property));
                }
            });
        };
        //	fix the prototype
        newConstructor.prototype = defaultContructor.prototype;
        //	returning a new constructor
        return newConstructor;
    };
}

function associateEvent(instance, metadata) {
    document.querySelector(metadata.selector).addEventListener(metadata.event, event => {
        if (metadata.prevent) event.preventDefault();
        instance[metadata.propertyKey](event);
    });
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Required_js__ = __webpack_require__(4);


function bindEvent(event = Object(__WEBPACK_IMPORTED_MODULE_0__Required_js__["a" /* required */])('event'), selector = Object(__WEBPACK_IMPORTED_MODULE_0__Required_js__["a" /* required */])('selector'), prevent = true) {
    return function (target, propertyKey, descriptor) {

        Reflect.defineMetadata('bindEvent', { event, selector, prevent, propertyKey }, Object.getPrototypeOf(target), propertyKey);

        return descriptor;
    };
}

/***/ })
],[5]);
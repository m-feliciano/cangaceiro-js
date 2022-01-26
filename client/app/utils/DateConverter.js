System.register(["./exceptions/DateInvalidException"], function (_export, _context) {
	"use strict";

	var DateInvalidException;
	return {
		setters: [function (_exceptionsDateInvalidException) {
			DateInvalidException = _exceptionsDateInvalidException.default;
		}],
		execute: function () {
			class DateConverter {
				constructor() {
					throw new Error("WARN: This class cannot be instantiated!");
				}

				static toText(str) {
					return `${str.getDate()}/${str.getMonth() + 1}/${str.getFullYear()}`;
				}

				static toDate(str) {
					if (!str.match(/^\d{4}-\d{2}-\d{2}$/)) {
						throw new DateInvalidException();
					}
					return new Date(...str.split("-").map((item, indice) => item - indice % 2));
				}
			}

			_export("default", DateConverter);
		}
	};
});
//# sourceMappingURL=DateConverter.js.map
System.register(["./ApplicationException"], function (_export, _context) {
    "use strict";

    var ApplicationException;
    return {
        setters: [function (_ApplicationException) {
            ApplicationException = _ApplicationException.default;
        }],
        execute: function () {
            class DateInvalidException extends ApplicationException {
                constructor() {
                    super("The date must be in dd/mm/yyyy format");
                    // fix name error
                    this.name = this.constructor.name;
                }
            }

            _export("default", DateInvalidException);
        }
    };
});
//# sourceMappingURL=DateInvalidException.js.map
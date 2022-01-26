System.register(["./controllers/NegotiationController", "./utils/Debounce"], function (_export, _context) {
	"use strict";

	var NegotiationController, debounce;
	return {
		setters: [function (_controllersNegotiationController) {
			NegotiationController = _controllersNegotiationController.default;
		}, function (_utilsDebounce) {
			debounce = _utilsDebounce.debounce;
		}],
		execute: function () {

			const ctrl = new NegotiationController(),
			      $ = document.querySelector.bind(document);

			$(".form").addEventListener("submit", ctrl.add.bind(ctrl));
			$("#button-delete").addEventListener("click", debounce(() => ctrl.delete.bind(ctrl), 1000));
			$("#import-button").addEventListener("click", debounce(() => ctrl.importNegotiations.bind(ctrl), 1000));
		}
	};
});
//# sourceMappingURL=app.js.map
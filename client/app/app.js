System.register(["./controllers/NegotiationController"], function (_export, _context) {
  "use strict";

  var NegotiationController;
  return {
    setters: [function (_controllersNegotiationController) {
      NegotiationController = _controllersNegotiationController.default;
    }],
    execute: function () {

      const ctrl = new NegotiationController(),
            $ = document.querySelector.bind(document);

      $(".form").addEventListener("submit", ctrl.add.bind(ctrl));
      $("#button-delete").addEventListener("click", ctrl.delete.bind(ctrl));
      $("#import-button").addEventListener("click", ctrl.importNegotiations.bind(ctrl));
    }
  };
});
//# sourceMappingURL=app.js.map
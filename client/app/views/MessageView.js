System.register(["./View"], function (_export, _context) {
	"use strict";

	var View;
	return {
		setters: [function (_View) {
			View = _View.default;
		}],
		execute: function () {
			class MessageView extends View {
				template(model) {
					return model.text ? `<p class="alert alert-info" role="alert">${model.text}</p>` : `<p></p>`;
				}
			}

			_export("default", MessageView);
		}
	};
});
//# sourceMappingURL=MessageView.js.map
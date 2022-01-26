import View from "./View";

export default class MessageView extends View {
	template(model) {
		return model.text ?
			`<p class="alert alert-info" role="alert">${model.text}</p>`
			: `<p></p>`;
	}
}

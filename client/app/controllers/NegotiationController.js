class NegotiationController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputDate = $("#date");
		this._inputQuantity = $("#quantity");
		this._inputValue = $("#value");
		this._negotiations = new Negotiations();
		this._negotiationsView = new NegotiationsView("#negotiations");
        this._negotiationsView.update(this._negotiations);
	}

	add(event) {
		event.preventDefault();
		this._negotiations.add(this._createNegotiation());
		this._negotiationsView.update(this._negotiations);
		this._clearForm();
	}

	_clearForm() {
		this._inputDate.value = "";
		this._inputQuantity.value = 1;
		this._inputValue.value = 0.0;
		this._inputDate.focus();
	}

	_createNegotiation() {
		return new Negotiation(
			DateConverter.toDate(this._inputDate.value),
			parseInt(this._inputQuantity.value),
			parseFloat(this._inputValue.value)
		);
	}
}

class NegotiationController {
	constructor() {
		const $ = document.querySelector.bind(document);
		this._inputDate = $("#date");
		this._inputQuantity = $("#quantity");
		this._inputValue = $("#value");

		const self = this;

		//	criating a new Proxy with support of fabric
		this._negotiations = new Bind(
			new Negotiations(),
			new NegotiationsView("#negotiations"),
			["add", "clear"]
		);

		this._message = new Bind(
			new Message(), 
			new MessageView("#messageView")
			["text"]
		);
	}

	add(event) {
		event.preventDefault();
		this._negotiations.add(this._createNegotiation());
		this._message.text = "Trading successfully added";
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

	delete() {
		this._negotiations.clear();
		this._message.text = "Successfully deleted trades";
	}
}

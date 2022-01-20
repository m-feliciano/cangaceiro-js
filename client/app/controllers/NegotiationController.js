class NegotiationController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputDate = $("#date");
		this._inputQuantity = $("#quantity");
		this._inputValue = $("#value");
	}

	add(event) {
		event.preventDefault();

        let date = DataConverter.toDate(this._inputDate.value);
        
        let negotiation = new Negotiation(
			date,
			parseInt(this._inputQuantity.value),
			parseFloat(this._inputValue.value)
		);

        let diaMesAno = DataConverter.toText(negotiation.date);
		console.log(diaMesAno, date);
	}
}

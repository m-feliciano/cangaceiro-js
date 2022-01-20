class NegotiationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
    }

    add(event) {
        
        event.preventDefault();

        let date = new Date(...this._inputDate.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        let negotiation = new Negotiation(
            date,
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );

        console.log(negotiation);
    }
}
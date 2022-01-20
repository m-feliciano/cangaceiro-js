class NegotiationsView {
	constructor(selector) {
		this._element = document.querySelector(selector);
	}

	update(model) {
		this._element.innerHTML = this.template(model);
	}

	template(model) {
		return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
        ${model.toArray()
            .map((negotiation) => `
                <tr>
                    <td>${DateConverter.toText(negotiation.date)}</td>
                    <td>${negotiation.quantity}</td>
                    <td>${negotiation.value}</td>
                    <td>${negotiation.volume}</td>
                </tr>`
			).join("")}
        </tbody>
        
        <tfoot>
        <tr>
            <td	colspan="3">TOTAL</td>
            <td>${model.volumeTotal}</td>
			</tr>
        </tfoot>
    </table>`;
	}
}

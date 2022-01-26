import View from "./View";

export default class NegotiationsView extends View {
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
        ${model
			.toArray()
			.map(
				(negotiation) => `
                <tr align="right">
                    <td align="center">${DateConverter.toText(negotiation.date)}</td>
                    <td>${negotiation.quantity}</td>
                    <td>${negotiation.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                    <td>${negotiation.volume.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                </tr>`
			)
			.join("")}
        </tbody>
        
        <tfoot>
        <tr align="center">
            <td	colspan="3"><strong>TOTAL</strong></td>
            <td align="right"><strong>${model.volumeTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong></td>
			</tr>
        </tfoot>
    </table>`;
	}
}

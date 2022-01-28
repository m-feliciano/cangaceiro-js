import {NegotiationsView} from "../views/NegotiationsView";
import {Negotiations} from "../models/negotiation/Negotiations";
import MessageView from "../views/MessageView";
import Message from "../models/Message";
import {getNegotiationDAO} from "../utils/DaoFactory";
import getExceptionMessage from "../utils/exceptions/ApplicationException";
import Negotiation from "../models/negotiation/Negotiation";
import DateConverter from "../utils/DateConverter";
import Bind from "../utils/Bind";
import {debounce} from "../utils/decorators/Debounce.js";
import {controller} from "../utils/decorators/Controller.js";
import {bindEvent} from "../utils/decorators/BindEvent.js";

@controller('#date', '#quantity', '#value')
export class NegotiationController {
	constructor(_date, _quantity , _value) {
		Object.assign(this, {_date, _quantity, _value})

		//	creating a new Proxy with support of fabric
		this._negotiations = new Bind(
			new Negotiations(),
			new NegotiationsView("#negotiations"),
			"add", "clear"
		);

		this._message = new Bind(
			new Message(),
			new MessageView("#messageView"),
			"text"
		);

		this._init();
	}

	async _init() {
		try {
		const dao = await getNegotiationDAO();
		const negotiations = dao.listAll();
		negotiations.forEach(
			(negotiation) => this._negotiations.add(negotiation))
		} catch(err){
			this._message.text = getExceptionMessage(err);
		}
	}
	@bindEvent('submit', '.form')
	@debounce()
	async add(event) {
		try {
			event.preventDefault();

			const negotiation = this._createNegotiation();

			const dao = await getNegotiationDAO();
			await dao
				.add(negotiation)
				.then(() => {
					this._negotiations.add(negotiation);
					this._message.text = "Trading successfully added";
					this._clearForm();
				})
		} catch (err) {
			this._message.text = getExceptionMessage(err);
		}
	}

	_clearForm() {
		this._date.value = "";
		this._quantity.value = 1;
		this._value.value = 0.0;
		this._date.focus();
	}

	_createNegotiation() {
		return new Negotiation(
			DateConverter.toDate(this._date.value),
			parseInt(this._quantity.value),
			parseFloat(this._value.value)
		);
	}

	@bindEvent('click', '#delete-button')
	async delete() {
		const dao = await getNegotiationDAO();
		await dao
			.deleteAll()
			.then(() => {
				this._negotiations.clear();
				this._message.text = "Successfully deleted trades";
			})
			.catch(
				() =>
					(this._message.text =
						"Successfully deleted all negotiaions")
			);
	}

	@bindEvent('click', '#import-button')
	@debounce()
	async importNegotiations() {
		try {

			const NegotiationService = await import('../services/NegotiationService')

			const service = new NegotiationService();

			const object = await service.getNegotiationsByPeriod();
			console.log(object);
			
			object.filter((newNegotiation) =>
					!this._negotiations.toArray()
					.some((exists) => newNegotiation.equals(exists)))
				.forEach((negotiation) => this._negotiations.add(negotiation));

			this._message.text = "Successfully imported negotiations by period";
		} catch (err) {
			this._message.text = getExceptionMessage(err);
		}
	}
}

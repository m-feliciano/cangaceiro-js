import NegotiationsView from "../views/NegotiationsView";
import Negotiations from "../models/negotiation/Negotiations";
import MessageView from "../views/MessageView";
import Message from "../models/Message";
import NegotiationService from "../services/NegotiationService";
import { getNegotiationDAO } from "../utils/DaoFactory";
import getExceptionMessage from "../utils/exceptions/ApplicationException";
import Negotiation from "../models/negotiation/Negotiation";
import DateConverter from "../utils/DateConverter";
import Bind from "../utils/Bind";

export default class NegotiationController {
	constructor() {
		const $ = document.querySelector.bind(document);
		this._inputDate = $("#date");
		this._inputQuantity = $("#quantity");
		this._inputValue = $("#value");

		//	creating a new Proxy with support of fabric
		this._negotiations = new Bind(
			new Negotiations(),
			new NegotiationsView("#negotiations"),
			"add",
			"clear"
		);

		this._message = new Bind(
			new Message(),
			new MessageView("#messageView"),
			"text"
		);

		this._service = new NegotiationService();

		this._init();
	}

	async _init() {
		const dao = await getNegotiationDAO();
		await dao
			.listAll()
			.then((negotiations) =>
				negotiations.forEach((negotiation) =>
					this._negotiations.add(negotiation)
				)
			)
			.catch((err) => (this._message.text = err));
	}

	async add(event) {
		try {
			event.preventDefault();

			const negotiation = this._createNegotiation();

			const dao = await getNegotiationDAO();
			await dao
				.add(negotiation)
				.then(() => {
					this._negotiations.add(this._createNegotiation());
					this._message.text = "Trading successfully added";
					this._clearForm();
				})
				.catch((err) => (this._message.text = err));
		} catch (err) {
			console.log(err);

			if (err instanceof DateInvalidException) {
				this._message.text = err.message;
			} else {
				this._message.text =
					"An unexpected error has occurred you. Contact support ";
			}
		}
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

	async importNegotiations() {
		try {
			const object = await this._service.getNegotiationsByPeriod();
			object
				.filter((newNegotiation) => 
					!this._negotiations.toArray()
						.some((exists) => newNegotiation.equals(exists)))
				.forEach((negotiation) => this._negotiations.add(negotiation));

			this._message.text = "Successfully imported negotiations by period";
		} catch (err) {
			this._message.text = getExceptionMessage(err);
		}
	}
}

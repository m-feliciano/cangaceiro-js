import HttpService from "../utils/HttpService";
import Negotiation from "../models/negotiation/Negotiation";
import ApplicationException from "../utils/exceptions/ApplicationException";


export default class NegotiationService {
	constructor() {
		this._http = new HttpService();
		this._baseUrl = "http://localhost:3000/negotiations";
	}

	getNegotiationsByWeek() {
		return this._http.get(`${this._baseUrl}/week`).then(
			(data) => this._instantiateNegotiation(data),
			() => {
				throw new ApplicationException("Unable to get trades from week");
			}
		);
	}

	getNegotiationsByLastWeek() {
		return this._http.get(`${this._baseUrl}/lastweek`).then(
			(data) => this._instantiateNegotiation(data),
			() => {
				throw new ApplicationException("Unable to get trades from last week");
			}
		);
	}

	getNegotiationsByBeforeLastWeek() {
		return this._http.get(`${this._baseUrl}/beforelastweek`).then(
			(data) => this._instantiateNegotiation(data),
			() => {
				throw new ApplicationException("Unable to get trades from before last week");
			}
		);
	}

	_instantiateNegotiation(data) {
		return data.map(
			(obj) =>
				new Negotiation(new Date(obj.date), obj.quantity, obj.value)
		);
	}

	async getNegotiationsByPeriod() {
		try{
			let period = await Promise.all([
				this.getNegotiationsByWeek(),
				this.getNegotiationsByLastWeek(),
				this.getNegotiationsByBeforeLastWeek(),
			]);

			return period
				.reduce((newArray, item) => newArray.concat(item), [])
				.sort((a, b) => b.date.getTime() - a.date.getTime())
		} catch(err) {
				console.log(err);
				throw new ApplicationException("Unable to get negotiations by period");
			};
	}
}

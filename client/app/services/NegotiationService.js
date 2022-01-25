class NegotiationService {
	constructor() {
		this._http = new HttpService();
		this._baseUrl = "http://localhost:3000/negotiations";
	}

	getNegotiationsByWeek() {
		return this._http.get(`${this._baseUrl}/week`).then(
			(data) => {
				return this.instanteNegotiation(data);
			},
			() => {
				throw new Error("Unable to get trades from week");
			}
		);
	}

	getNegotiationsByLastWeek() {
		return this._http.get(`${this._baseUrl}/lastweek`).then(
			(data) => {
				return this.instanteNegotiation(data);
			},
			() => {
				throw new Error("Unable to get trades from last week");
			}
		);
	}

	getNegotiationsByBeforeLastWeek() {
		return this._http.get(`${this._baseUrl}/beforelastweek`).then(
			(data) => {
				return this.instanteNegotiation(data);
			},
			() => {
				throw new Error("Unable to get trades from before last week");
			}
		);
	}

	instanteNegotiation(data) {
		return data.map(
			(obj) =>
				new Negotiation(new Date(obj.date), obj.quantity, obj.value)
		);
	}

	getNegotiationsByPeriod() {
		return Promise.all([
			this.getNegotiationsByWeek(),
			this.getNegotiationsByLastWeek(),
			this.getNegotiationsByBeforeLastWeek(),
		])
			.then((period) =>
				period.reduce((newArray, item) => newArray.concat(item), [])
					.sort((a, b) => b.date.getTime() - a.date.getTime())
			)
			.catch((err) => {
				console.log(err);
				throw new Error("Unable to get negotiations by period");
			});
	}
}

export class Negotiations {
	constructor() {
		this._negotiations = [];
		Object.freeze(this);
	}
	add(negotiation) {
		this._negotiations.push(negotiation);
	}

	toArray() {
		return this._negotiations.slice();
	}

	get volumeTotal() {
		return this._negotiations
			.reduce((actual, y) => (actual + y.volume), 0);
	}
	clear() {
		this._negotiations.length = 0;
	}
}

class Negotiations {
	constructor(trigger) {
		this._negotiations = [];
		this._trigger = trigger;
		Object.freeze(this);
	}
	add(negotiation) {
		this._negotiations.push(negotiation);
		this._trigger(this);
	}

	toArray() {
		return this._negotiations.slice();
	}

	get volumeTotal() {
		return this._negotiations.reduce(
			(actual, y) => (actual += y.volume), 0);
	}
	clear() {
		this._negotiations.length = 0;
		this._trigger(this);
	}
}

class NegotiationDAO {
	constructor(connection) {
		this._connection = connection;
		this._store = "negotiations";
	}
	add(negotiation) {
		return new Promise((resolve, reject) => {
			const request = this._connection
				.transaction([this._store], "readwrite")
				.objectStore(this._store)
				.add(negotiation);

			request.onsuccess = (e) => resolve();
			request.onerror = (e) => {
				console.log(e.target.error);
				reject("Unable to save negotiation");
			};
		});
	}
	listAll() {
		return new Promise((resolve, reject) => {
			const negotiations = [];

			const cursor = this._connection
				.transaction([this._store], "readwrite")
				.objectStore(this._store)
				.openCursor();

			cursor.onsuccess = (e) => {
				const current = e.target.result;

				if (current) {
					const negotiation = new Negotiation(
						current.value._date,
						current.value._quantity,
						current.value._value
					);
					negotiations.push(negotiation);
					current.continue();
				} else {
					resolve(negotiations);
				}
			};
			cursor.onerror = (e) => {
				console.log("Error: " + e.target.error);
				reject("Cannot list negotiations");
			};
		});
	}

	deleteAll() {
		return new Promise((resolve, reject) => {
			const request = this._connection
				.transaction([this._store], "readwrite")
				.objectStore(this._store)
				.clear();
			request.onsuccess = (e) => resolve();
			request.onerror = (e) => {
				console.log(e.target.error);
				reject("Unable to delete negotiations");
			};
		});
	}
}

// // test on console

// // Save
// ConnectionFactory.getConnection()
// 	.then((conn) => new NegotiationDAO(conn))
// 	.then((dao) => dao.add(negotiation))
// 	.then(() => console.log("Successfully saved negotiation!"))
// 	.catch((err) => console.log(err));

// // List
// ConnectionFactory.getConnection()
// 	.then((conn) => new NegotiationDAO(conn))
// 	.then((dao) => dao.listAll())
// 	.then((n) => console.log(n))
// 	.catch((err) => console.log(err));

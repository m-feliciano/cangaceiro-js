//  module pattern
const ConnectionFactory = (() => {
	const stores = ["negotiations"];
	let connection = null;
	// monkey patch: changing the main API
	let close = null;

	//  factory pattern
	return class ConnectionFactory {
		constructor() {
			throw new Error("Cannot instantiate this class");
		}
		static getConnection() {
			return new Promise((resolve, reject) => {
				if (connection) return resolve(connection);
				const openRequest = indexedDB.open("cangaceirojs", 2);
				openRequest.onupgradeneeded = (e) => {
					stores.forEach((store) => {
						ConnectionFactory._createStores(e.target.result);
					});
				};
				openRequest.onsuccess = (e) => {
					// only will be executed once, on the first connection
					connection = e.target.result;
					// Waiting the original function!
					close = connection.close.bind(connection);

					connection.close = () => {
						throw new Error(
							"You cannot close the connection directly"
						);
					};
					resolve(e.target.result);
				};
				openRequest.onerror = (e) => {
					console.log(e.target.error);
					reject(e.target.error.name);
				};
			});
		}
		static _createStores(connection) {
			stores.forEach((store) => {
				if (connection.objectStoreNames.contains(store))
					connection.deleteObjectStore(store);
				connection.createObjectStore(store, { autoIncrement: true });
			});
		}
		// monkey patch: changing the main API
		static closeConnection() {
			if (connection) {
				close();
			}
		}
	};
})(); // IIFE (Immediately-invoked function expression),

System.register(["../models/negotiation/Negotiation"], function (_export, _context) {
	"use strict";

	var Negotiation;
	return {
		setters: [function (_modelsNegotiationNegotiation) {
			Negotiation = _modelsNegotiationNegotiation.default;
		}],
		execute: function () {

			let connection = null; //must to be let, it will be rewriten

			const openRequest = indexedDB.open("cangaceirojs", 2);

			//  events
			openRequest.onupgradeneeded = e => {
				console.log("Creating or updating a database");
				connection = e.target.result;

				if (connection.objectStoreNames.contains("negotiations")) {
					connection.deleteObjectStore("negotiations");
				}
				connection.createObjectStore("negotiations", {
					autoIncrement: true
				});
			};
			openRequest.onsuccess = e => {
				console.log("Successfully connected");
				connection = e.target.result; // instantiated
			};
			openRequest.onerror = e => console.log(e.target.error);

			function add() {
				const negotiation = new Negotiation(new Date(), 200, 1);
				const request = connection.transaction(["negotiations"], "readwrite").objectStore("negotiations").add(negotiation);

				request.onsuccess = e => console.log("Successfully saved negotiation");
				request.onerror = e => console.log("Unable to save negotiation");
			}

			_export("add", add);

			function listAll() {
				const negotiations = [];

				const cursor = connection.transaction(["negotiations"], "readwrite").objectStore("negotiations").openCursor();

				cursor.onsuccess = e => {
					const current = e.target.result;

					if (current) {
						const negotiation = new Negotiation(current.value._date, current.value._quantity, current.value._value);
						negotiations.push(negotiation);
						current.continue();
					} else {
						console.log(negotiations);
					}
				};

				cursor.onerror = e => console.log("Error: " + e.target.error);
			}

			_export("listAll", listAll);
		}
	};
});
//# sourceMappingURL=IndexedDB.js.map
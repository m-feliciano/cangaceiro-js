class NegotiationService {
	getNegotiationsFromWeek(cb) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `http://localhost:3000/negotiations/week`);
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("Getting negotiations from server...");
				const negotiations = JSON.parse(xhr.responseText).map(
					(obj) =>
						new Negotiation(
							new Date(obj.date),
							obj.quantity,
							obj.value
						)
				);
				cb(null, negotiations);
			} else {
				cb("Cannot getting week negotiations", null);
			}
		};
		xhr.send();
	}
}

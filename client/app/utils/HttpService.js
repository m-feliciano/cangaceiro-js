class HttpService {
	get(url) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						console.log("Getting negotiations from server...");
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			};
			xhr.send();
		});
	}
}

export default class HttpService {
	async get(endpoint) {
		const res = await fetch(endpoint);
		if (!res.ok) {
			throw new Error(res.statusText); // 404
		}
		console.log("Getting negotiations from server...");
		return res.json();
	}
}
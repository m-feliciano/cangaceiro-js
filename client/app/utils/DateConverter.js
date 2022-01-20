class DateConverter {
	constructor() {
		throw new Error("WARN: This class cannot be instantiated!");
	}

	static toText(str) {
		return `${str.getDate()}/${str.getMonth() + 1}/${str.getFullYear()}`;
	}

	static toDate(str) {
		if (!str.match(/^\d{4}-\d{2}-\d{2}$/)) {
			throw new Error("WARN: This date must be yyyy-mm-dd");
		}
		return new Date(
			...str.split("-").map((item, indice) => item - (indice % 2))
		);
	}
}

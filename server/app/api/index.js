const api = {};

const today = new Date();
const lastDate = new Date();
lastDate.setDate(today.getDate() - 7);
const beforeLastDate = new Date();
beforeLastDate.setDate(today.getDate() - 14);

const negotiations = [
	{ date: today, quantity: 1, value: 150 },
	{ date: today, quantity: 2, value: 250 },
	{ date: today, quantity: 3, value: 350 },
	{ date: lastDate, quantity: 4, value: 450 },
	{ date: lastDate, quantity: 5, value: 550 },
	{ date: lastDate, quantity: 6, value: 650 },
	{ date: beforeLastDate, quantity: 7, value: 750 },
	{ date: beforeLastDate, quantity: 8, value: 950 },
	{ date: beforeLastDate, quantity: 9, value: 950 },
];

api.week = function (req, res) {
	const object = negotiations.filter(
		(negotiation) => negotiation.date > lastDate
	);
	res.json(object);
};

api.lastweek = function (req, res) {
	const object = negotiations.filter(
		(negotiation) =>
			negotiation.date < today && negotiation.date > beforeLastDate
	);
	setTimeout(function () {
		res.json(object);
	}, 500);
};

api.beforelastweek = function (req, res) {
	const object = negotiations.filter(
		(negotiation) => negotiation.date < lastDate
	);
	res.json(object);
};

api.insertNegotiation = function (req, res) {
	req.body._date = new Date(req.body._date);
	console.log("Date received via POST:");
	console.log(req.body);
	negotiations.push(req.body);
	res.status(200).json("Negotiations received");
};

module.exports = api;

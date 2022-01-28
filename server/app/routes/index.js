const api = require("../api/index");
const baseURL = "/negotiations";

module.exports = function (app) {
	app.route(`${baseURL}/week`).get(api.week);
	app.route(`${baseURL}/lastweek`).get(api.lastweek);
	app.route(`${baseURL}/beforelastweek`).get(api.beforelastweek);
	app.route(`${baseURL}`).post(api.insertNegotiation);
};

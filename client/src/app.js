import	'bootstrap/dist/css/bootstrap.css';
import	'bootstrap/dist/css/bootstrap-theme.css';

import Negotiation from "./models/negotiation/Negotiation";

const negotiation = new Negotiation(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const body = JSON.stringify(negotiation)
const method = "POST"

const config = {
	method,
	headers,
	body
};

const url = 'http://localhost:3000/negotiations';

fetch(url, config).then(() => console.log('Successfully sent data'));

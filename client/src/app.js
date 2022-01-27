import NegotiationController from "./controllers/NegotiationController";
import Negotiation from "./models/negotiation/Negotiation.js";

export const ctrl = new NegotiationController();

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

fetch('http://localhost:3000/negotiations', config)
	.then(() => console.log('Successfully sent data'));

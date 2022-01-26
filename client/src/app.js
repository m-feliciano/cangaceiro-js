import NegotiationController from "./controllers/NegotiationController";

const ctrl = new NegotiationController(), $ = document.querySelector.bind(document);

$(".form").addEventListener("submit", ctrl.add.bind(ctrl));
$("#button-delete").addEventListener("click", ctrl.delete.bind(ctrl));
$("#import-button").addEventListener("click", ctrl.importNegotiations.bind(ctrl));

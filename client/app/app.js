const ctrl = new NegotiationController();
const $ = document.querySelector.bind(document);

$(".form").addEventListener(
	"submit", ctrl.add.bind(ctrl));

$("#button-delete").addEventListener(
	"click", ctrl.delete.bind(ctrl));

$("#import-button").addEventListener(
	"click", ctrl.importNegotiations.bind(ctrl));

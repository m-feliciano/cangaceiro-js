import NegotiationController from "./controllers/NegotiationController";
import { debounce } from "./utils/Debounce";

const ctrl = new NegotiationController(),
	$ = document.querySelector.bind(document);

$(".form").addEventListener("submit", ctrl.add.bind(ctrl));
$("#button-delete").addEventListener(
	"click",
	debounce(() => ctrl.delete.bind(ctrl), 1000)
);
$("#import-button").addEventListener(
	"click",
	debounce(() => ctrl.importNegotiations.bind(ctrl), 1000)
);

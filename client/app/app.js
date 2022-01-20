const controller = new NegotiationController();

document
	.querySelector(".form")
	.addEventListener("submit", controller.add.bind(controller));

document
	.querySelector("#button-delete")
	.addEventListener("click", controller.delete.bind(controller));

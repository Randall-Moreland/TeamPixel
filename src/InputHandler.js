export default class InputHandler {

	constructor(canvasManager, playerController, gameController) {
		this.canvasManager = canvasManager;
		this.playerController = playerController;
		this.gameController = gameController;
		this.canvasManager.getCanvasDiv().addEventListener('keydown', (inputEvent) => this.inputHandler(inputEvent));
		console.log(this.canvasManager.getCanvasDiv());

	}

	inputHandler(inputEvent) {
		console.log("Handling input " + inputEvent.key)
		let inputHandled = false;

		if (inputEvent.key == "a") {
			this.playerController.move(-this.playerController.getDimensions().width, 0);
			inputHandled = true;
		} else if (inputEvent.key == "d") {
			this.playerController.move(this.playerController.getDimensions().width, 0);
			inputHandled = true;
		} else if (inputEvent.key == "w") {
			this.playerController.move(0, -this.playerController.getDimensions().height);
			inputHandled = true;
		} else if (inputEvent.key == "s") {
			this.playerController.move(0, this.playerController.getDimensions().height);
			inputHandled = true;
		}

		// Only refresh canvas if input was handled
		if (inputHandled) {
			this.gameController.refreshCanvas();
		}
	}
}
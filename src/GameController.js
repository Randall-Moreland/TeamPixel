import CanvasManager from './canvas/CanvasManager.js';
import CameraManager from './canvas/CameraManager.js';
import PlayerController from './world/worldElement/PlayerController.js';
import MysteriousCabinLoader from './world/mapLoader/MysteriousCabinLoader.js';
import InputHandler from './InputHandler.js';

class GameController {

	//Delegates everything related to the game; loads maps, worldElements, the player, etc. Mostly passing information to each other. For example, the CameraManager needs to know the player's position, so the WorldController will need to pass that information to the CameraManager. Probably also passes information to menus and such; 

	//If we want to support animations or other time-based events, we'll need to add a clock here and pass it

	constructor() {
		console.log("Creating game controller");

		this.cameraManager = new CameraManager();

		this.canvasManager = new CanvasManager(this.cameraManager);
		this.playerController = new PlayerController(this.canvasManager, { x: 700, y: 100 });

		this.inputHandler = new InputHandler(this.canvasManager, this.playerController, this);

		new MysteriousCabinLoader(this.canvasManager);

		// Initial canvas draw
		this.canvasManager.updateCanvas();
	}

	refreshCanvas() {
		this.canvasManager.updateCanvas();
	}
}

new GameController();
import WorldElement from './WorldElement.js'

export default class PlayerController extends WorldElement { //Will need to handle inputs as well as the player's position, inventory if we have one, etc.

	constructor(canvasManager, position = { x: 0, y: 0 }) {
		super(canvasManager);
		console.log("Creating player controller")
		super.setName("player");
		super.setWidth(40);
		super.setHeight(40);
		super.setPosition(position);
		super.setImg("/assets/mysteriousCabin/arnold.png");
		super.setZIndex(10); // Player should be in front of background
		super.setIsVisible(true);
	}

	move(dx, dy) {
		//This will snap the player to the new position; if we want to support animations, we'll need to pass in a deltaTime parameter and update the position based on that. Will also need to set a "isMoving" flag to ignore movement inputs while moving

		var newPosition = { x: super.getPosition().x + dx, y: super.getPosition().y + dy };

		//Will need to check for collisions here

		super.setPosition(newPosition);
	}

	getDimensions() {
		return { width: super.getWidth(), height: super.getHeight() }
	}

	updateView() {

	}
}
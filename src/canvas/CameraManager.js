export default class CameraManager { //Either we can have the camera follow the player around, or sit still. This would also be where we could do custom camera movements like a cutscene or something
	constructor() {
		console.log("Creating camera manager");
		this.position = { x: 0, y: 0 }
	}

	getPosition() {
		return this.position;
	}
}
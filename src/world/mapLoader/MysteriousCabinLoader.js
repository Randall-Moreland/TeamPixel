import WorldElement from '../worldElement/WorldElement.js'

export default class MysteriousCabinLoader { //Loads the mysterious cabin map. For now it's just the background, and there are no collisions or anything.
	//But later this will be responsible for loading other map elements, the world border, and anything else that's related to this map specifically
	constructor(canvasManager) {
		this.initBackground(canvasManager);
	}

	initBackground(canvasManager) {
		let background = new WorldElement(canvasManager);
		background.setName("background");
		background.setPosition({ x: 0, y: 0 });
		background.setWidth(1024);
		background.setHeight(512);
		background.setImg("/assets/mysteriousCabin/cabin.png");
		background.setZIndex(0); // Background should be behind everything
		background.setIsVisible(true);
		return background;
	}
}
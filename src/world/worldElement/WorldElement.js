export default class WorldElement { //This can have some subclasses, including "Interactable" which would support into the narrations/options like in narrationDemo.
	//For simple worldElements like backgrounds though we can just use this class
	constructor(canvasManager) {
		this.canvasManager = canvasManager;
	}

	setName(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	setPosition(position) {
		this.position = position;
	}

	getPosition() {
		return this.position;
	}

	setWidth(width) {
		this.width = width;
	}

	getWidth() {
		return this.width;
	}

	setHeight(height) {
		this.height = height;
	}

	getHeight() {
		return this.height;
	}

	setImg(img) {
		console.log("Setting image to " + img);
		let temp = new Image();
		temp.src = img
		temp.width = this.getWidth();
		temp.height = this.getHeight();
		this.img = temp;
		console.log(this.img);
	}

	getImg() {
		return this.img;
	}

	setZIndex(zIndex) {
		this.zIndex = zIndex;
	}

	getZIndex() {
		return this.zIndex || 0;
	}

	setIsVisible(isVisible) {
		if (isVisible && !this.getIsVisible()) {
			this.isVisible = true;
			this.canvasManager.registerWorldElement(this);
		} else if (!isVisible && this.isVisible()) {
			this.isVisible = false;
			this.canvasManager.unregisterWorldElement(this);
		}
	}

	getIsVisible() {
		return this.isVisible;
	}

	updateView() {
		//Does nothing by default; can be overridden by subclasses.
	}

}
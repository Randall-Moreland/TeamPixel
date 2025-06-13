export default class CanvasManager { //Only handles visualization; all other logic such as collision will be handled elsewhere (this class might also be responsible for showing menu elements?)
	constructor(cameraManager) {
		console.log("Creating canvas manager");
		this.canvasDiv = document.querySelector("canvas")
		this.context = this.canvasDiv.getContext("2d");
		this.canvasDiv.width = 10000;
		this.canvasDiv.height = 10000;
		this.cameraManager = cameraManager;
		this.canvasDiv.tabIndex = 0;
		this.canvasDiv.focus();
		this.elements = []
	}

	registerWorldElement(element) {
		this.elements.push(element);
		this.showWorldElement(element);
	}

	unregisterWorldElement(element) {
		var removedElement = this.elements.filter(elementDivPair => elementDivPair[0] == element)[0];
		this.elements.remove(removedElement[0]);
		this.canvasDiv.removeChild(removedElement[1]);
	}

	showWorldElement(element) {
		console.log("Drawing " + element.img + " on canvas at " + element.getPosition().x + ", " + element.getPosition().y);

		let img = element.getImg();
		if (img.complete && img.naturalWidth !== 0) {
			// Image is already loaded, draw immediately
			this.context.drawImage(img, element.getPosition().x, element.getPosition().y, element.getWidth(), element.getHeight());
		} else {
			// Image not loaded yet, wait for onload
			img.onload = () => this.context.drawImage(img, element.getPosition().x, element.getPosition().y, element.getWidth(), element.getHeight());
		}
	}

	updateCanvas() {

		//This would be called every frame; if we support animations, we'll pass in a deltaTime parameter, pass it on to the element, call getImg() for each element, and display that . We'll also need a clock in that case

		console.log(this.elements);
		this.context.reset();

		// Sort elements by z-index before rendering (lower z-index draws first, behind higher z-index)
		const sortedElements = [...this.elements].sort((a, b) => a.getZIndex() - b.getZIndex());

		for (let element of sortedElements) {
			let img = element.getImg();
			
			if (img && img.complete && img.naturalWidth !== 0) {
				// Image is loaded, draw it
				this.context.drawImage(img, element.getPosition().x, element.getPosition().y, element.getWidth(), element.getHeight());
			}
			// If image isn't loaded yet, it will be drawn on the next frame when it's ready

			element.updateView();
		}
	}

	getCanvasDiv() {
		return this.canvasDiv;
	}

}
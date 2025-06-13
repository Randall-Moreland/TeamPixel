//Will need to be reworked a little
//It doesn't need to create elements or handle any of the HTML stuff; it just needs to update the narration and options arrays
//Also will need to be converted to a class



let narrationDiv = document.getElementById('narrationDiv');
let optionsDiv = document.getElementById('optionsDiv');

let narrations;
let options;

loadInitialMenu();

function updateDialogue() {
	updateNarrations();
	updateOptions();
}

//Would need to change updateNarrations and updateOptions to display better; for now just using p
//Similarly if we want a chat log (or a journal?) we'd need to store those narrations there. Or maybe just do summaries elsewhere of what the player has done after certain trigger points, like a quest log

function updateNarrations() {
	narrationDiv.textContent = '';
	for (let narrationIndex in narrations) {
		let narrationText = document.createElement('p');
		narrationText.textContent = narrations[narrationIndex];
		narrationDiv.appendChild(narrationText);
	}
}

function updateOptions() {
	optionsDiv.textContent = '';
	for (let optionIndex in options) {
		let optionText = document.createElement('p');
		optionText.textContent = options[optionIndex][0];
		optionText.onclick = options[optionIndex][1];
		optionsDiv.appendChild(optionText);
	}
}

//Example menus for testing below

function loadInitialMenu() {
	narrations = ["Hello!", "These are the first messages of the story.", "That's how you hook an audience!"];
	options = [["Start the story!", loadStartMenu], ["Don't start the story.", loadGameOverMenu]];
	updateDialogue();
}

function loadStartMenu() {
	narrations = ["You have chosen to begin the story."];
	options = [["Nevermind, I don't want to", loadGameOverMenu], ["Continue onward", loadOnwardMenu], ["Restart", loadInitialMenu]];
	updateDialogue();
}

function loadGameOverMenu() {
	narrations = ["Game Over."];
	options = [["Play Again", loadInitialMenu]];
	updateDialogue();
}

function loadOnwardMenu() {
	narrations = ["I didnt plan that far ahead."];
	options = [["Restart", loadInitialMenu]];
	updateDialogue();
}
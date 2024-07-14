// function OnLoad() {
// 	alert("Page is loaded");
// }

function onClick() {
	alert("BOTTON CLICKED");
}

function onDblClick() {
	document.getElementById("msg").innerHTML = "Button clicked twise";
}

function MouseOver() {
	document.getElementById("emoji").style.backgroundColor = "red";
}

function mouseOut() {
	document.getElementById("emoji").style.backgroundColor = "white";
}

function copy() {
	document.getElementById("copy-msg").innerHTML = "Text Copied to clipboard";
}

function OnFocus() {
	document.getElementById("txt").style.backgroundColor = "red";
}

function OnInput() {
	let text = document.getElementById("myInput").value;
	document.getElementById("input-msg").innerHTML = "You wrote: " + text;
}

function keyDown() {
	document.getElementById("input-key").innerHTML =
		"Keyboard Key pressed" + text;
}

function change() {
	let text = document.getElementById("change").value;
	document.getElementById("change-msg").innerHTML = "Changes : " + text;
}

form.addEventListener("submit", logSubmit);

function logSubmit(event) {
	let name = event.target.txt.value;
	log.textContent = `Submitted Data Is: ${name}`;
	event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
const txt = document.getElementById("txt").value;

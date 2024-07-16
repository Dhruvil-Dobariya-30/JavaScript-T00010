let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let display = document.getElementById("display");

function add() {
	let result = Number(num1.value) + Number(num2.value);
	message("Addition", result);
}

function sub() {
	let result = Number(num1.value) - Number(num2.value);
	message("Subtraction", result);
}

function multi() {
	let result = Number(num1.value) * Number(num2.value);
	message("Multiplication", result);
}

function div() {
	let result = Number(num1.value) / Number(num2.value);
	message("Division", result);
}

function message(msg, result) {
	let finalMsg = `<p>${msg} of <span>${num1.value}</span> And <span>${num2.value}</span> Is  <span>${result}</span></p>`;
	display.innerHTML = finalMsg;
}

function clearMsg() {
	num1.value = "";
	num2.value = "";
	display.innerHTML = "Enter 2 Numbers";
}

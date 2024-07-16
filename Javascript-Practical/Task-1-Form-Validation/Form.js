const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const rePasswordField = document.getElementById("re-password");
const submitBtn = document.getElementById("btn");
const cross = document.getElementById("cross");

let isName = false,
	isEmail = false,
	isPass = false,
	isRePass = false;

let CROSS = "&#x274C;";
let COLOR = "#d71818b4";
let RIGHT = "&#x2714;";
let GREEN = "green";

function manageFocus(id, type) {
	document.getElementById(id).style.display = type;
}

function checkName() {
	let nameData = nameField.value;
	let nameMsg = document.getElementById("name-msg");
	let nameCross = document.getElementById("nameCross");

	let nums = /[0-9]/;
	let special = /[!@#$%^&*(),.?":{}|<>]/;
	nameMsg.style.color = COLOR;
	nameCross.innerHTML = CROSS;

	if (nameData.trim().length < 3) {
		isName = false;
	} else if (nums.test(nameData)) {
		alert("Numbers are not allowed");
		isName = false;
	} else if (special.test(nameData)) {
		alert("Special characters are not allowed");
		isName = false;
	} else {
		nameMsg.style.color = GREEN;
		nameCross.textContent = RIGHT;
		isName = true;
		nameCross.innerHTML = RIGHT;
	}
	EnableBtn();
}

function checkEmail() {
	let emailData = emailField.value;
	let emailMsg = document.getElementById("email-msg");
	let emailCross = document.getElementById("emailCross");

	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	emailMsg.style.color = COLOR;
	emailCross.innerHTML = CROSS;

	if (emailRegex.test(emailData)) {
		emailMsg.style.color = GREEN;
		emailCross.innerHTML = RIGHT;
		isEmail = true;
	} else {
		isEmail = false;
	}
	EnableBtn();
}

function checkPass() {
	let passData = passwordField.value;
	let special = /[!@#$%^&*(),.?":{}|<>]/;
	let capital = /[A-Z]/;
	let small = /[a-z]/;
	let num = /[0-9]/;

	let isCapital = capital.test(passData);
	let isSmall = small.test(passData);
	let isNum = num.test(passData);
	let isSpecial = special.test(passData);
	let isLength = passData.length >= 8;

	document.getElementById("capCross").innerHTML = CROSS;
	document.getElementById("numCross").innerHTML = CROSS;
	document.getElementById("smallCross").innerHTML = CROSS;
	document.getElementById("specialCross").innerHTML = CROSS;
	document.getElementById("lengthCross").innerHTML = CROSS;

	document.getElementById("pass-capital").style.color = COLOR;
	document.getElementById("pass-number").style.color = COLOR;
	document.getElementById("pass-small").style.color = COLOR;
	document.getElementById("pass-special").style.color = COLOR;
	document.getElementById("pass-length").style.color = COLOR;

	if (isCapital) {
		document.getElementById("pass-capital").style.color = GREEN;
		document.getElementById("capCross").innerHTML = RIGHT;
	}
	if (isNum) {
		document.getElementById("pass-number").style.color = GREEN;
		document.getElementById("numCross").innerHTML = RIGHT;
	}
	if (isSmall) {
		document.getElementById("pass-small").style.color = GREEN;
		document.getElementById("smallCross").innerHTML = RIGHT;
	}
	if (isSpecial) {
		document.getElementById("pass-special").style.color = GREEN;
		document.getElementById("specialCross").innerHTML = RIGHT;
	}
	if (isLength) {
		document.getElementById("pass-length").style.color = GREEN;
		document.getElementById("lengthCross").innerHTML = RIGHT;
	}

	isPass = isCapital && isSmall && isNum && isSpecial && isLength;
	console.log(isPass);
	EnableBtn();
}

function checkRePass() {
	document.getElementById("RePassCross").innerHTML = CROSS;
	document.getElementById("re-Pass-msg").style.color = COLOR;

	if (passwordField.value !== rePasswordField.value) {
		console.log("Passwords do not match.");
		isRePass = false;
	} else {
		console.log("Passwords match.");
		document.getElementById("re-Pass-msg").style.color = "green";
		document.getElementById("RePassCross").innerHTML = RIGHT;
		isRePass = true;
	}
	EnableBtn();
}

function EnableBtn() {
	submitBtn.disabled = true;
	submitBtn.style.backgroundColor = "#ccc";
	submitBtn.style.cursor = "not-allowed";

	if (isName && isEmail && isPass && isRePass) {
		submitBtn.style.backgroundColor =
			isName && isEmail && isPass && isRePass ? "#112d4e" : "";
		submitBtn.disabled = false;
		submitBtn.style.cursor = "pointer";
	}
}
EnableBtn();

function SubmitMsg(e) {
	alert("Form Submitted Successfully");
	e.preventDefault();
}

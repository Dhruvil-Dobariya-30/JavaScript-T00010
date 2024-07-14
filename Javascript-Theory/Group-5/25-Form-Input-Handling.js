function numValidate() {
	let x = document.getElementById("numb").value;
	let text;
	if (isNaN(x) || x < 1 || x > 10) {
		text = "Input not valid";
	} else {
		text = "Input OK";
	}
	document.getElementById("demo").innerHTML = text;
}

function validateForm2(event) {
	event.preventDefault();
	let x = document.getElementById("name").value;
	if (x == "") {
		document.getElementById("error-name").innerText = "Name must be filled out";
	} else {
		document.getElementById("error-name").innerText = "";
	}
	let y = document.getElementById("email").value;
	if (y == "") {
		document.getElementById("error-email").innerText = "Email required";
	} else {
		document.getElementById("error-email").innerText = "";
	}
}

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
	const username = form.elements.username.value;
	const password = form.elements.password.value;

	if (username === "Dhruvil" && password === "Dhruvil123") {
		document.getElementById("p-msg").innerHTML = "Login Successfully";
	} else {
		document.getElementById("p-msg").innerHTML = "User not found";
	}

	event.preventDefault();
});

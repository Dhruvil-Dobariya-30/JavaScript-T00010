function add() {
	const data = localStorage.setItem("name", "Dhruvil");
	console.log(localStorage.getItem("name"));
}

function remove() {
	const data = localStorage.removeItem("name");
	console.log(localStorage.getItem("name"));
}
function show() {
	const data = localStorage.getItem("name");
	if (localStorage.getItem("name")) {
		document.getElementById("show").innerHTML = "Name is " + data;
	} else {
		document.getElementById("show").innerHTML = "Nothing in Local Storage ";
	}
}

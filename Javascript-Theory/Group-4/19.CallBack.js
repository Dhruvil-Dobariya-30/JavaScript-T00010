function greet(name, callback) {
	console.log("Hi" + " " + name);
	callback();
}

function callMe() {
	console.log("Callback function called");
}

greet("Dhruvil", callMe);

// example 2
// function greet2() {
// 	console.log("Hello world");
// }

// function sayName(name) {
// 	console.log("Hello" + " " + name);
// }

// setTimeout(greet, 2000);
// sayName("Dhruvil");

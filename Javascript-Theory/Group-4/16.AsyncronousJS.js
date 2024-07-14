// Synchronous JS
let greet_1 = "Hello";
let greet_2 = "World!!!";
console.log(greet_1);
for (let i = 0; i < 9000000000; i++) {}
console.log(greet_2);

// Asynchronous JS
let greet_one = "Hello";
let greet_two = "World!!!";

console.log(greet_one); 

//setTimeout
setTimeout(function () {
	console.log("Asynchronous");
}, 3000);
console.log(greet_two);

// SetInterval
const intervalID = setInterval(myCallback, 500, "Parameter 1");

function myCallback(a) {
	console.log(a);
}

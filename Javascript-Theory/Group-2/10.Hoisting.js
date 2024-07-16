hello();
console.log(b); //undefined
// console.log(a); //ReferenceError
// console.log(c); //ReferenceError
// hey(); //ReferenceError

let a = 10;
var b = 20;
const c = 30;

function hello() {
	console.log("function called");
}

const hey = function () {
	console.log("Hey...");
};

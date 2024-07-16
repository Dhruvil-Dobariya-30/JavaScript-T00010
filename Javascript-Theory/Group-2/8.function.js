// Function
function func1() {
  console.log("Hello");
}
func1();

// Arguments
let message = "hey..";
function func2(msg) {
  console.log(msg);
}
func2(message);

// Expression
const message2 = function () {
  console.log("Hello");
};
message2();

const square = function (number) {
  return number * number;
};
console.log(square(4));

// Arrow Function
let hello = () => {
  console.log("Hello");
};
hello();

let multiply = (a, b) => {
  console.log(a * b);
};
multiply(2, 5);

// Return Statement
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

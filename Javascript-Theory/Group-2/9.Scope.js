const global = "Global"; //global variable

function hello() {
  const local = "Local"; //local variable
  let funcScope = "Function Scope"; //function Scope
  console.log(global, local, funcScope);
}
console.log(global, funcScope);
// console.log(local); // error

hello();

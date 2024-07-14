let data = { FirstName: "Dhruvil", lastName: "Dobariya", age: 20 };
let keys = Object.keys(data);
console.log(keys);

let values = Object.values(data);
console.log(values);

let entries = Object.entries(data);
console.log(entries);

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { c: 4, d: 5, e: 6 };
console.log(Object.assign(obj1, obj2));

Object.freeze(data);
data.FirstName = "Hello";
console.log(data);

const arr = [1, 2, 3, 4, 5];

console.log("length is : ", arr.length);

arr.push(6);
console.log("Push Op.", arr);

arr.pop();
console.log("Pop Op.", arr);

arr.unshift(0);
console.log("Unshift Op.", arr);

arr.shift(0);
console.log("Shift Op.", arr);

console.log("At(2)", arr.at(2));

console.log("indexOf(2)", arr.indexOf(2));

console.log("includes(4)", arr.includes(4));

console.log(
	"map method",
	arr.map((num) => num)
);

console.log(
	"filter method",
	arr.filter((num) => num % 2 == 0)
);

console.log(
	"every > 0",
	arr.every((num) => num > 0)
);

console.log(
	"some == 2",
	arr.some((num) => num == 2)
);

console.log(arr.reduce((acc, num) => acc + num, 0));

console.log(arr.concat([6, 7]));

console.log(arr.reverse());

console.log([5, 3, 1, 2, 4].sort());

console.log(arr.join("-"));

console.log([1, 2, 3, [4, 5, 6]].flat());

console.log(arr.find((num, i) => i === 1));

console.log(arr.findIndex((num) => num === 4));

console.log(arr.toString());

console.log(arr.slice(1, 4));

console.log(arr.splice(2, 2));
console.log(arr);

console.log(arr.lastIndexOf(5));

console.log(Array.of("1", "2", "3"));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);
console.log(result);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);

console.log("fill(10)", arr.fill(10));

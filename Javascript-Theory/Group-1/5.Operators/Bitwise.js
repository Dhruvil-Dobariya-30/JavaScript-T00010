// AND
let a = 5; //0101
let b = 3; //0011
console.log(a & b); //0001

// OR
let c = 3; //011
let d = 5; //101
console.log(c | d); //111

// XOR
let e = 5; //101
let f = 4; //100
console.log(e ^ f); //001

// NOT
let g = -10;
let h = 5;
console.log(~g);
console.log(~h);

// Left Shift
console.log(2 << 1); //0010 << 0001 = 00100
console.log(5 << 2); //0101 << 0010 = 10100
console.log(4 << 4); //0100 << 0100 = 1000000

// Right Shift
console.log(6 >> 2); //0110 0011 0001
console.log(7 >> 3); //0111 0011 0001 0000

// Left Shift assignment
let num1 = 5; // 00101

num1 <<= 2; // 10100

console.log(num1); //10100 = 20

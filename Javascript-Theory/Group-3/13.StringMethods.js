let txt = "Hello ";
console.log(txt.charAt(0));

let txt2 = "World";
console.log(txt.concat(txt2));

txt = "Hello Good Morning...";
console.log(txt.indexOf("Good"));

console.log(txt.lastIndexOf("Morning..."));

console.log(txt.replace("Morning...", "Afternoon..."));

console.log(txt.search("Hello"));

console.log(txt.slice(0, 10));

console.log(txt.substring(1, 8));

console.log(txt.toUpperCase());

console.log(txt.toLowerCase());

let txt3 = "       Hello      ";
console.log(txt3.trim());

let txt4 = 10;
console.log(txt4.toString());

console.log(txt.includes("Good"));

console.log(txt.charCodeAt(0));

let txt5 = "loremsum loremsum loremsum loremsum";
console.log(txt5.match(/sum/g));

let txt6 = "1,2,3,4,5,6";
console.log(txt6.split(","));

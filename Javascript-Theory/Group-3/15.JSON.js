let data = { firstName: "Dhruvil", lastName: "Dobariya", age: 20 };

let StrObj = JSON.stringify(data);
console.log(StrObj);

let JsonObj = JSON.parse(StrObj);
console.log(JsonObj);

let url = `https://jsonplaceholder.typicode.com/users`;
const table = document.getElementById("table");
let inputData = document.getElementById("search");
let tbody = document.getElementById("tbody");

let jsonData;
console.log("object");
async function getData() {
	let AllData = await fetch(url);
	jsonData = await AllData.json();
	console.log(jsonData);

	tbody = "";

	jsonData.map((data) => {
		tbody += `     
          <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        </tr>
      `;
	});
	document.getElementById("tbody").innerHTML = tbody;
}

getData();

function searchName(e) {
	tbody = "";
	jsonData.map((data) => {
		let verify = data.name
			.toLowerCase()
			.includes(inputData.value.trim().toLowerCase());

		if (verify) {
			tbody += `     
            <tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.email}</td>
          <td>${data.phone}</td>
          </tr>
        `;
		}
		document.getElementById("tbody").innerHTML = tbody;
	});

	e.preventDefault();
}

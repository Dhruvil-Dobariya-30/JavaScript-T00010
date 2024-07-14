let allInputDiv = document.getElementById("allInputs");
let inputNumber = 0;
let inputTypes = [];
let allTypes = [
	"button",
	"checkbox",
	"color",
	"date",
	"datetime-local",
	"email",
	"file",
	"hidden",
	"image",
	"month",
	"number",
	"password",
	"radio",
	"range",
	"reset",
	"search",
	"submit",
	"tel",
	"text",
	"url",
	"week",
];

function getNumber() {
	inputNumber = prompt("How Many Input Fields Required?");
	inputNumber ? getInputFields() : getNumber();
}

function getInputFields() {
	let i = 0;
	while (i < inputNumber) {
		let type = prompt(`Enter Field ${i + 1} Type`)
			.toLowerCase()
			.trim();
		let result = validateInputType(type);
		if (result) {
			inputTypes.push(type);
			i++;
		} else {
			alert(`Invalid input type ${type}`);
		}
	}
	createInputs();
}

function validateInputType(type) {
	return allTypes.includes(type);
}

function createInputs() {
	document.querySelector(".getNum").style.display = "none";
	document.querySelector(".addMore").style.display = "flex";
	allInputDiv.style.display = "block";

	let inputsHTML = inputTypes
		.map((type, index) => {
			let { inputHtml } = getInputDetails(type, index);
			return `
        <div>
          ${inputHtml}
        </div>
      `;
		})
		.join("");

	allInputDiv.innerHTML += inputsHTML;
	inputTypes = [];
}

function getInputDetails(type, index) {
	let labelText = "";
	let inputHtml = "";
	let id = `${index}`;

	if (type === "submit" || type === "reset") {
		let value = prompt(`Enter value for ${type} button`);
		inputHtml += `<input type="${type}" id="${id}" value="${value}"/>`;
	} else if (type === "button") {
		labelText = prompt(`Enter label for ${type} (field ${index + 1})`);
		inputHtml += `<button id="${id}" name="${type}" value="${labelText}">${labelText}</button>`;
	} else if (type === "radio" || type === "checkbox") {
		labelText = prompt(`Enter label for ${type} (field ${index + 1})`);
		inputHtml += `
				<div class="radio-checkbox">
				<input type="${type}" id="${id}" name="${type}" value="${labelText}"/>
				<label for="${id}">${labelText}</label>
				</div>`;
	} else {
		labelText = prompt(`Enter label for ${type} input (field ${index + 1})`);
		inputHtml += `<div class="fieldInputs">
						<label for="${id}">${labelText}</label>
                 		 <input type="${type}" id="${id}" placeholder="${type}"/>
					</div> `;
	}
	return { labelText, inputHtml };
}

function addMore() {
	getNumber();
}

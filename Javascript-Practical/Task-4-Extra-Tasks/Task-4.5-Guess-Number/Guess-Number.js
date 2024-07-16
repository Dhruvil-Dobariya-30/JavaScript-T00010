let input = document.getElementById("number");
let div = document.getElementById("container");
let tries = 0;

let number;

function GenerateNumber() {
	number = Math.floor(Math.random() * 100);
	console.log("generated Number", number);
	tries = 0;
	input.value = "";
	div = "";
	div += `
        <div>Enter A Number</div>`;
	document.getElementById("container").innerHTML = div;
}

function gauss() {
	if (input.value == number) {
		div = "";
		div += `
        <div>
            <p>You Guess The Number In <span>${tries + 1}</span> In Attempt</p>
            <button onclick=GenerateNumber() class="again">Try Again</button>
        </div>`;
		document.getElementById("container").innerHTML = div;
	} else if (input.value > number) {
		div = "";
		console.log("Your Number Is Higher");
		div += `<p>Number Is <span>Higher</span> Than Generated Number</p>`;
		document.getElementById("container").innerHTML = div;

		tries++;
	} else {
		div = "";
		console.log("Your Number Is Lower");
		div += `<p>Number Is <span>Lower</span> Than Generated Number</p>`;
		document.getElementById("container").innerHTML = div;
		tries++;
	}
}
GenerateNumber();

let questionData = JSON.parse(localStorage.getItem("Questions"));
let id = 1;
let score = 0;
let questionsLeft = 10;
let wrongAns = [];

async function getData() {
	let optionDiv = "";
	questionData.forEach((data) => {
		if (data.id === id) {
			optionDiv += `

                <div class="header">
                    <h2 class="questionsLeft">Questions Left : ${questionsLeft}</h2>
                </div>
                <h3 class="display-Question">${data.question}</h3>

				<div class="inputs">
                <div class="div1">
				<input type="radio" value="${data.options[0]}" name="question" id="radio" />
				<p>${data.options[0]}</p>
			</div>
			<div class="div1">
				<input type="radio" value="${data.options[1]}"  value="${data.options[1]}" name="question" id="radio" />
				<p>${data.options[1]}</p>
			</div>
			<div class="div1">
				<input type="radio" value="${data.options[2]}" name="question" id="radio" />
				<p>${data.options[2]}</p>
			</div>
			<div class="div1">
				<input type="radio" value="${data.options[3]}" name="question" id="radio" />
				<p>${data.options[3]}</p>
			</div>
			</div>
                <div>
                    <button onclick="check(${data.id})">Submit</button>
                </div>`;
		}
	});
	document.getElementById("option").innerHTML = optionDiv;
	if (questionsLeft === 0) {
		dashboard();
	}
}

function check(id) {
	const radioValue = document.querySelector(`input[name="question"]:checked`);
	if (radioValue) {
		verifyAnswer(radioValue.value, id);
		updateId();
		questionsLeft--;
	} else {
		alert("Select any one option");
	}
	getData();
}

function verifyAnswer(ans, id) {
	const correctAns = questionData.find((data) => data.id === id).correct;
	if (ans === correctAns) {
		score++;
	} else {
		console.log("Wrong answer");
		let question = questionData[id - 1].question;
		wrongAns.push({
			Question: question,
			SelectedAnswer: ans,
			CorrectAnswer: correctAns,
		});
		console.log(wrongAns);
	}
}

function updateId() {
	id++;
}

function dashboard() {
	console.log("Dashboard function called");
	document.getElementById("option").style.display = "none";

	let dashboardHTML = `
        <div class="score-div">
            <h1 class="score">Score : ${score}/10</h1>
        </div>
        <div>
            <h4 class="wrong-header">Wrong Questions</h4>
    `;

	dashboardHTML += wrongAns
		.map(
			(ques) => `
        <div class="wrong-ques"><h3>${ques.Question}</h3> <span style="color: red">${ques.SelectedAnswer} (Selected)</span> VS <span style="color: green" class="correct"> ${ques.CorrectAnswer} (Correct)</span></div>
    `
		)
		.join("");

	dashboardHTML += `</div>`;

	document.getElementById("dashboard").innerHTML = dashboardHTML;
}

getData();

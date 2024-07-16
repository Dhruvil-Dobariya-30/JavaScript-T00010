let message = document.getElementById("countdown");

function startCountDown() {
	document.getElementById("start-button").disabled = true;
	let seconds = Number(document.getElementById("number").value);
	if (seconds > 0) {
		setInterval(() => {
			message.innerHTML = `Remaining Time : ${seconds}s `;
			seconds == 0 ? location.reload() : seconds--;
		}, 1000);
	}
}

const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");

document.getElementById("myBtn").addEventListener("click", function () {
	alert("Hello World!");
});

window.addEventListener("resize", function () {
	document.getElementById("txt").innerHTML = Math.random();
});

div1.addEventListener(
	"click",
	(e) => {
		console.log(e.target);
	},
	true
);

div2.addEventListener(
	"click",
	(e) => {
		console.log(e.target);
	},
	true
);

div3.addEventListener(
	"click",
	(e) => {
		console.log(e.target);
	},
	true
);

document.addEventListener("click", (e) => {
	console.log("Document");
});

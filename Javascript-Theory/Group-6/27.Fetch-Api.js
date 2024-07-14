let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

var data = Math.floor(Math.random() * 100);

function add() {
	fetch(`https://jsonplaceholder.typicode.com/todos/${data}`)
		.then((res) => res.json())
		.then((d) => {
			console.log(d);
			document.getElementById("id").innerHTML = d.id;
			document.getElementById("title").innerHTML = d.title;
			document.getElementById("sts").innerHTML = d.completed;
		});
	data++;
}

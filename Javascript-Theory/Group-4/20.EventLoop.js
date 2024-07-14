console.log("starting");

const fun2 = () => {
	setTimeout(() => {
		console.log("Fun2 Starting");
	}, 3000);
};

const fun1 = () => {
	console.log("Fun1 Starting");
	fun2();
	console.log("fun1 ending");
};

fun1();

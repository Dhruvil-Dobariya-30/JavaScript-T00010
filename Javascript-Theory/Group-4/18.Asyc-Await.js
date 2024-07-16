// example 1
const getData = async () => {
	let y = await "Hello World";
	console.log(y);
};

console.log(1);
getData();
console.log(2);

// example 2
function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved");
		}, 2000);
	});
}

async function asyncCall() {
	console.log("calling");
	const result = await resolveAfter2Seconds();
	console.log("object");
	console.log(result);
}

asyncCall();

// example 3
function asynchronous_operational_method() {
	let first_promise = new Promise((resolve, reject) => resolve("Hello"));
	let second_promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(" GeeksforGeeks..");
		}, 1000);
	});
	let combined_promise = Promise.all([first_promise, second_promise]);
	return combined_promise;
}

async function display() {
	let data = await asynchronous_operational_method();
	console.log(data);
}

display();

// async await with fetch
async function func1() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();
		console.log(data);
	} catch (e) {
		console.log(e);
	}
}

func1();

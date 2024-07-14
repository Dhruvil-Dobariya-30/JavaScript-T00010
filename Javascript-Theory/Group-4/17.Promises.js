// then catch
const ticket = new Promise(function (resolve, reject) {
	const IsBoarded = false;

	if (IsBoarded) {
		resolve("Sited");
	} else {
		reject("Cancelled");
	}
});

ticket.then((data) => console.log(data)).catch((data) => console.log(data));

// promise chaining
const promise2 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		let err = false;

		if (!err) {
			resolve({ name: "Dhruvil" });
		} else {
			reject("invalid data");
		}
	}, 1000);
});
promise2
	.then((user) => {
		console.log(user);
		return user.name;
	})
	.then((data) => console.log(data))
	.catch((user) => {
		console.log(user);
	})
	.finally(() => console.log("Promise completed"));

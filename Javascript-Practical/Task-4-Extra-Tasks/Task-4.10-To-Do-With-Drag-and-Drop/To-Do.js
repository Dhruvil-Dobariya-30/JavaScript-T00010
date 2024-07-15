let input = document.querySelector("#input");
let todoDiv = document.querySelector("#container");
let todos = JSON.parse(localStorage.getItem("Todos")) || [];

function addToDo() {
	let newToDo = input.value.trim();
	if (newToDo !== "") {
		const task = {
			id: Date.now(),
			title: newToDo,
			status: "pending",
		};
		todos.push(task);
		input.value = "";
		saveTodos();
		displayToDo();
	}
}

function displayToDo() {
	todoDiv.innerHTML = todos
		.map(
			(todo) =>
				`<div class="todo-item" draggable="true" data-id="${todo.id}">
                    <div style="display: flex; align-items: center;">
                    <input type="checkbox" ${
											todo.status === "completed" ? "checked" : ""
										}
                        onchange="toggleStatus(${todo.id})">
                    <p style="text-decoration: ${
											todo.status === "completed" ? "line-through" : "none"
										}">
                        ${todo.title}
                    </p>
                </div>
                <div>
                    <button onclick="updateToDo(${
											todo.id
										})" class="update">Update</button>
                    <button onclick="deleteToDo(${
											todo.id
										})" class="delete">Delete</button>
                </div>
            </div>`
		)
		.join("");
}
displayToDo();

function deleteToDo(id) {
	todos = todos.filter((todo) => todo.id !== id);
	saveTodos();
	displayToDo();
}

function updateToDo(id) {
	const task = todos.find((item) => item.id === id);
	if (task) {
		const updatedTask = prompt("Update task:", task.title);
		if (updatedTask !== null) {
			task.title = updatedTask;
			saveTodos();
			displayToDo();
		}
	}
}

function toggleStatus(id) {
	const task = todos.find((item) => item.id === id);
	if (task) {
		task.status = task.status === "pending" ? "completed" : "pending";
		saveTodos();
		displayToDo();
	}
}

function saveTodos() {
	localStorage.setItem("Todos", JSON.stringify(todos));
}

function initDragAndDrop() {
	const sortableList = document.querySelector("#container");
	const items = sortableList.querySelectorAll(".todo-item");

	items.forEach((item) => {
		item.addEventListener("dragstart", () => {
			setTimeout(() => item.classList.add("dragging"), 0);
		});
		item.addEventListener("dragend", () => {
			item.classList.remove("dragging");
		});
	});

	sortableList.addEventListener("dragover", (e) => {
		e.preventDefault();
		const draggingItem = document.querySelector(".dragging");
		const siblings = [
			...sortableList.querySelectorAll(".todo-item:not(.dragging)"),
		];

		let nextSibling = siblings.find((sibling) => {
			return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
		});

		sortableList.insertBefore(draggingItem, nextSibling);
	});
}

function addToDo() {
	let newToDo = input.value.trim();
	if (newToDo !== "") {
		const task = {
			id: Date.now(),
			title: newToDo,
			status: "pending",
		};
		todos.push(task);
		input.value = "";
		saveTodos();
		displayToDo();
	}
}

function displayToDo() {
	todoDiv.innerHTML = todos
		.map(
			(todo) =>
				`<div class="todo-item" draggable="true" data-id="${todo.id}">
                    <div style="display: flex; align-items: center;">
                        <input type="checkbox" ${
													todo.status === "completed" ? "checked" : ""
												}
                            onchange="toggleStatus(${todo.id})">
                        <p style="text-decoration: ${
													todo.status === "completed" ? "line-through" : "none"
												}">
                            ${todo.title}
                        </p>
                    </div>
                    <div>
                        <button onclick="updateToDo(${
													todo.id
												})" class="update">Update</button>
                        <button onclick="deleteToDo(${
													todo.id
												})" class="delete">Delete</button>
                    </div>
                </div>`
		)
		.join("");

	initDragAndDrop();
}

function deleteToDo(id) {
	todos = todos.filter((todo) => todo.id !== id);
	saveTodos();
	displayToDo();
}

function updateToDo(id) {
	const task = todos.find((item) => item.id === id);
	if (task) {
		const updatedTask = prompt("Update task:", task.title);
		if (updatedTask !== null) {
			task.title = updatedTask;
			saveTodos();
			displayToDo();
		}
	}
}

function toggleStatus(id) {
	const task = todos.find((item) => item.id === id);
	if (task) {
		task.status = task.status === "pending" ? "completed" : "pending";
		saveTodos();
		displayToDo();
	}
}

function saveTodos() {
	localStorage.setItem("Todos", JSON.stringify(todos));
}

function DragAndDrop() {
	const sortableList = document.querySelector("#container");
	const items = sortableList.querySelectorAll(".todo-item");

	items.forEach((item) => {
		item.addEventListener("dragstart", () => {
			setTimeout(() => item.classList.add("dragging"), 0);
		});
		item.addEventListener("dragend", () => {
			item.classList.remove("dragging");
		});
	});

	sortableList.addEventListener("dragover", (e) => {
		e.preventDefault();
		const draggingItem = document.querySelector(".dragging");
		const siblings = [
			...sortableList.querySelectorAll(".todo-item:not(.dragging)"),
		];

		let nextSibling = siblings.find((sibling) => {
			return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
		});

		sortableList.insertBefore(draggingItem, nextSibling);
	});
}

displayToDo();

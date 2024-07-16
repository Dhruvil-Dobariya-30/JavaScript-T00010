let taskTitle = document.getElementById("task");
let form = document.getElementById("To-Do-Form");
let taskList = document.getElementById("taskList");
let allTasksBtn = document.getElementById("all-tasks");
let completedTasksBtn = document.getElementById("completed-tasks");
let incompleteTasksBtn = document.getElementById("incomplete-tasks");
let removeTasksBtn = document.getElementById("Remove-tasks");

let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
let currentFilter = "all";

function handleForm(event) {
	event.preventDefault();
	addTask();
}

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
console.log(day + "/" + month + "/" + year);

form.addEventListener("submit", handleForm);
allTasksBtn.addEventListener("click", () => filterTasks("all"));
completedTasksBtn.addEventListener("click", () => filterTasks("completed"));
incompleteTasksBtn.addEventListener("click", () => filterTasks("incomplete"));
removeTasksBtn.addEventListener("click", () => filterTasks("removeTasks"));

// add
function addTask() {
	const taskValue = taskTitle.value;

	const task = {
		id: Date.now(),
		title: taskValue,
		status: "pending",
	};

	Tasks.push(task);
	let strTask = JSON.stringify(Tasks);
	localStorage.setItem("Tasks", strTask);

	taskTitle.value = "";
	displayTasks();
}

// update
function updateTask(id) {
	const task = Tasks.find((item) => item.id === id);

	if (task) {
		const updatedTask = prompt("Update task:", task.title);
		if (updatedTask !== null) {
			task.title = updatedTask;

			localStorage.setItem("Tasks", JSON.stringify(Tasks));
			displayTasks();
		}
	}
}

// delete
function deleteTask(id) {
	Tasks = Tasks.filter((item) => item.id !== id);
	localStorage.setItem("Tasks", JSON.stringify(Tasks));
	displayTasks();
}

// complete - pending
function ManageStatus(id) {
	const task = Tasks.find((item) => item.id === id);
	if (task) {
		if (task.status === "pending") {
			task.status = "completed";
		} else {
			task.status = "pending";
		}

		localStorage.setItem("Tasks", JSON.stringify(Tasks));
		displayTasks();
	}
}

function filterTasks(filter) {
	currentFilter = filter;
	displayTasks();
}

// remove all tasks
function removeTasks() {
	console.log(localStorage.getItem("Tasks"));
	localStorage.clear();
	location.reload();
}

// show all tasks
function displayTasks() {
	let filteredTasks = Tasks;
	if (currentFilter === "completed") {
		filteredTasks = Tasks.filter((task) => task.status === "completed");
	} else if (currentFilter === "incomplete") {
		filteredTasks = Tasks.filter((task) => task.status === "pending");
	}

	taskList.classList.add("taskLists");

	taskList.innerHTML = filteredTasks
		.map(
			(task) => `
    <div class="task-item" >
      <div style="display: flex; align-items: center;">
        <input type="checkbox"
          ${task.status === "completed" ? "checked" : ""}
          onchange="ManageStatus(${task.id})">
        <span style="text-decoration: ${
					task.status === "completed" ? "line-through" : "none"
				}">
          ${task.title}
        </span>
      </div>
	  <div>
	  <p>${day + "/" + month + "/" + year}</p>
	  </div>
      <div>
        <button onclick="updateTask(${task.id})">Update</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    </div>
  `
		)
		.join(" ");
}

displayTasks();

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
									<div style="display: flex; align-items: center; ">
											<input type="checkbox" ${todo.status === "completed" ? "checked" : ""}
													onchange="toggleStatus(${todo.id})">
											<p style="text-decoration: ${
                        todo.status === "completed" ? "line-through" : "none"
                      }">
													${todo.title}
											</p>
									</div>
									<div>
											<button onclick="updateToDo(${todo.id})" class="update">Update</button>
											<button onclick="deleteToDo(${todo.id})" class="delete">Delete</button>
									</div>
							</div>`
    )
    .join("");
  addDragListeners();
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

function addDragListeners() {
  const items = document.querySelectorAll(".todo-item");
  items.forEach((item) => {
    item.draggable = true;
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", drop);
  });
}

function dragStart(e) {
  e.target.classList.add("dragging");
}

function dragOver(e) {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  const container = e.target.closest("#container");
  const afterElement = [
    ...container.querySelectorAll(".todo-item:not(.dragging)"),
  ].find((item) => {
    return (
      e.clientY <= item.getBoundingClientRect().top + item.offsetHeight / 2
    );
  });

  if (afterElement) {
    container.insertBefore(draggingItem, afterElement);
  } else {
    container.appendChild(draggingItem);
  }
}

function drop(e) {
  e.preventDefault();
  document.querySelector(".dragging").classList.remove("dragging");
  updateTodosOrder();
}

function updateTodosOrder() {
  todos = Array.from(todoDiv.querySelectorAll(".todo-item")).map((item) =>
    todos.find((todo) => todo.id === parseInt(item.dataset.id))
  );
  saveTodos();
}

addDragListeners();

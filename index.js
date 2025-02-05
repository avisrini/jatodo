const textArea = document.querySelector("textarea");
const addTodoButton = document.getElementById("addBtn");
const todoContainer = document.querySelector(".todoContainer");

let todoList = [];

function addTodo() {
  const todo = textArea.value;
  if (todo) {
    todoList.push(todo);
    // console.log("Added todo: ", todo);

    textArea.value = "";
    updateUI();
  } else return;
}

function removeTodo(index) {
  todoList = todoList.filter((todo, todoIndex) => todoIndex !== index);
  updateUI();
}

function editTodo(index) {
  textArea.value = todoList[index];
  todoList = todoList.filter((todo, todoIndex) => todoIndex !== index);
  updateUI();
}

function updateUI() {
  let innerHTML = "";
  todoList.forEach((todo, todoIndex) => {
    innerHTML += `<div class="todo">
          <p>${todo}</p>
          <div class="btnContainer">
            <button class="iconBtn" onclick="editTodo(${todoIndex})">   
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="iconBtn" onclick="removeTodo(${todoIndex})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>`;
  });
  todoContainer.innerHTML = innerHTML;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

addTodoButton.addEventListener("click", addTodo);

textArea.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTodoButton.click();
  }
});

window.onload = () => {
  const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
  if (storedTodoList) {
    todoList = storedTodoList;
    updateUI();
  }
};

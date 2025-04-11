const clickCountElement = document.getElementById("clicks-count");
const changeTextButtonElement = document.getElementById("change-text-button");
const todoInputElement = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-button");
const todoList = document.getElementById("todo-list");

let clicksCount = 0;

changeTextButtonElement.onclick = () => {
  clicksCount += 1;

  clickCountElement.innerHTML = clicksCount;
}


addTodoButton.addEventListener("click", () => {
  const inputValue = todoInputElement.value;

  if (!inputValue)
    return alert("Пустий елемент");

  const newItem = document.createElement("div");

  newItem.innerText = inputValue;
  todoInputElement.value = "";
  todoList.appendChild(newItem);
});

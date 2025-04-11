const tableBody = document.getElementById("todoTableBody");
const refreshBtn = document.getElementById("refreshBtn");
const form = document.getElementById("todoForm");
const newTitle = document.getElementById("newTitle");
const newCompleted = document.getElementById("newCompleted");

async function loadTodos() {
  tableBody.innerHTML = "";
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos = await res.json();

  todos.forEach(todo => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${todo.id}</td>
      <td>${todo.title}</td>
      <td>${todo.completed ? "✅" : "❌"}</td>
    `;
    tableBody.appendChild(row);
  });
}

refreshBtn.addEventListener("click", loadTodos);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>🆕</td>
    <td>${newTitle.value}</td>
    <td>${newCompleted.checked ? "✅" : "❌"}</td>
  `;
  tableBody.appendChild(newRow);

  // Очищаємо форму
  newTitle.value = "";
  newCompleted.checked = false;
});

loadTodos();


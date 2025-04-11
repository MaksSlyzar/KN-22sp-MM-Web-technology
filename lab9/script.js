const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';

  tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleComplete(index));
    label.appendChild(checkbox);

    const span = document.createElement('span');
    span.textContent = task.text;
    label.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', () => deleteTask(index));

    const actions = document.createElement('div');
    actions.className = 'task-actions';
    actions.appendChild(deleteBtn);

    li.appendChild(label);
    li.appendChild(actions);
    taskList.appendChild(li);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTask = {
    text: taskInput.value.trim(),
    completed: false,
    date: new Date().toISOString()
  };
  tasks.push(newTask);
  taskInput.value = '';
  renderTasks();
});

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

renderTasks();


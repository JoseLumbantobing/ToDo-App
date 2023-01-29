const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;

    if(todo) {
        const todos = document.createElement('li');
        todos.innerText = todo;
        todoList.appendChild(todos);
        input.value = '';

        todos.addEventListener('click', () => {
            todos.classList.toggle('completed');
        });

        todos.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todos.remove();     // todoList.removeChild(e.target);
        });
    }
});
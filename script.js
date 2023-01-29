const form = document.getElementById('form');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;

    if(todo) {
        const todos = document.createElement('li');
        todos.innerHTML = todo;
        todoList.appendChild(todos);
        input.value = '';
    }
    // markCompleted(todo);
});

// const markCompleted = (todo) => {
//     todoList.addEventListener('click', (e) => {
//         const complete = e.target;
//         complete.classList.add('completed');
//     });
// }
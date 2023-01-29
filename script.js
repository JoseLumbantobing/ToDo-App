const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addList();
});

const addList = (list) => {
    let todos = input.value;

    // Jika ada list dari storage maka todos = text list
    if(list) {
        todos = list.text;
    }

    // Nilai todos disini bisa dari list dan input.value
    if(todos) {
        const todo = document.createElement('li');
        
        // Jika terdapat storage list dan properti completed nya true
        if(list && list.completed) {
            todo.classList.add('completed');
        }

        todo.innerText = todos;
        todoList.appendChild(todo);
        input.value = '';

        todo.addEventListener('click', () => {
            todo.classList.toggle('completed');
            saveHistory();
        });

        todo.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todo.remove();     // todoList.removeChild(e.target);
            saveHistory();
        });

        saveHistory();
    }
}

const saveHistory = () => {
    const todosEl = document.querySelectorAll('li');
    const storage = [];

    todosEl.forEach((todoEl) => {
        storage.push({
            text : todoEl.innerText,
            completed : todoEl.classList.contains('completed'),
        });
    });

    // Sending data to web server, data has to be string
    // JSON.stringify() -> convert object into string
    localStorage.setItem('storage', JSON.stringify(storage));
}

// JSON.parse() -> constructing value or object from string
const storageLists = JSON.parse(localStorage.getItem('storage'));

if (storageLists) {
    storageLists.forEach((storageList) => {
        addList(storageList);
    });
}
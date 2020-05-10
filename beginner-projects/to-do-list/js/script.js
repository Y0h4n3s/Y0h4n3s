//selectors
const todoList = document.querySelector('.todo-list');
const submitBtn = document.querySelector('.submit-todo-btn');
const inputField = document.querySelector('.todo-input');
const filter = document.querySelector('.select-filter');

//event listeners
//adding an event listener to the submit button to add new todos to the todo list
submitBtn.addEventListener('click', submitTodo);

//delete and complete functionality
todoList.addEventListener('click', deleteCheck);

//display filter
filter.addEventListener('click', filterTodos);

//load previously saved todos
document.addEventListener('DOMContentLoaded', loadTodos)
    //functions

function submitTodo(event) {
    //Create a div
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div')

    //Create an li for discription and attach it to the todoDiv
    const discriptionLi = document.createElement('li');
    discriptionLi.classList.add('todo-info');
    discriptionLi.textContent = inputField.value;
    todoDiv.appendChild(discriptionLi);

    //Create two buttons. One to delete a submitted todo and another to mark it as done
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.classList.add('todo-div-btn');
    completeBtn.innerHTML = '<i class="fa fa-check" ></i>';
    todoDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.classList.add('todo-div-btn');
    deleteBtn.innerHTML = '<i class="fa fa-trash" ></i>';
    todoDiv.appendChild(deleteBtn);

    //Adding the div to the document
    todoList.appendChild(todoDiv);
    saveTodo(inputField.value);
    inputField.value = '';

}

function deleteCheck(event) {
    const trigerrer = event.target;
    if (trigerrer.classList[0] === 'delete-btn') {
        const item = trigerrer.parentElement;
        item.classList.add('scale-up');
        item.addEventListener('transitionend', function() {
            item.classList.add('fall');
            item.addEventListener('transitionend', function() {
                item.remove();
                deleteFromLocal(item.childNodes[0].textContent);
            });
        });

    }

    if (trigerrer.classList[0] === 'complete-btn') {
        console.log('passed condition')
        const item = trigerrer.parentElement;
        console.log(item)
        item.classList.toggle('completed');
    }
}

function filterTodos(event) {
    const todos = todoList.childNodes;
    const display = event.target.value;
    for (todo of todos) {
        switch (display) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'incomplete':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = 'flex';
                }
                break;


        }
    }
}

function saveTodo(todo) {
    let todos;
    todos = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    let todos;
    todos = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
    for (todo of todos) {
        //Create a div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div')

        //Create an li for discription and attach it to the todoDiv
        const discriptionLi = document.createElement('li');
        discriptionLi.classList.add('todo-info');
        discriptionLi.textContent = todo;
        todoDiv.appendChild(discriptionLi);

        //Create two buttons. One to delete a submitted todo and another to mark it as done
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.classList.add('todo-div-btn');
        completeBtn.innerHTML = '<i class="fa fa-check" ></i>';
        todoDiv.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.classList.add('todo-div-btn');
        deleteBtn.innerHTML = '<i class="fa fa-trash" ></i>';
        todoDiv.appendChild(deleteBtn);

        //Adding the div to the document
        todoList.appendChild(todoDiv);
    }
}

function deleteFromLocal(item) {
    let todos;
    todos = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i] + "  " + item)
        if (todos[i] === item) {
            todos.splice(i, 1);
        }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}
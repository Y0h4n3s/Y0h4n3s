//selectors
const todoList = document.querySelector('.todo-list');
const submitBtn = document.querySelector('.submit-todo-btn');
const inputField = document.querySelector('.todo-input');

//event listeners
//adding an event listener to the submit button to add new todos to the todo list
submitBtn.addEventListener('click', submitTodo);

//delete and complete functionality
todoList.addEventListener('click', deleteCheck);

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
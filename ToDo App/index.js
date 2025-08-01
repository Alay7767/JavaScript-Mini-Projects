let todoList = [{item : 'buy milk', dueDate : '4/10/25'}, 
                {item : 'go to college', dueDate : '4/10/25'}
];

displayItems();

function addToDo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item : todoItem, dueDate : todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHTML = '';
    
    for(let i = 0; i < todoList.length; i++){
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item , dueDate} = todoList[i];
        newHTML += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems()">Delete</button>`;
    }
    containerElement.innerHTML = newHTML;
}
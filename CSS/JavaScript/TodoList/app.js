
let todos = ['Buy New Turtle', 'Get Some meat'];

let i = 1;
let request = null;

while (request != 'q') {
   request = prompt("What would you like to do");

if (request === 'new') {

    let addTodo = prompt("Enter new todo");
    todos.push(addTodo);
    console.log(todos);
} else if (request === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
         
            console.log(`${i}: ${todos[i]}`);
        }
    console.log('**********');
    
} else if (request === 'delete') {

    let numsDel = prompt('Enter the item\'s number');
   
    todos.splice(numsDel, 1);
    console.log('Todo Removed');
    console.log(todos);
    
    } 
}



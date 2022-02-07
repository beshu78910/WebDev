
let todos = ['Buy New Turtle', 'Get Some meat'];

let i = 1;
let request = null;

while (request != 'q') {
   request = prompt("What would you like to do");

if (request === 'new') {

    let addTodo = prompt("Enter new todo");
    todos.push(addTodo);
    console.log(`${addTodo} added to the list`);
} else if (request === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
         
            console.log(`${i}: ${todos[i]}`);
        }
    console.log('**********');
    
} else if (request === 'delete') {

    const numsDel = parseInt(prompt('Enter the item\'s number'));
    if (!Number.isNaN(numsDel)) {
        const deleted = todos.splice(numsDel, 1);
    console.log(`Todo Removed ${deleted[0]}`);
    console.log(todos);
    } else {
        console.log('Unknow index');
   }
   
    
} else if (request === 'q') {
    console.log("Ok, you have quit");
    }
}



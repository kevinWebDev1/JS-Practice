//✅ 1. Create an Array called todos
const todos = []

// ✅ 2. Functions to create:
// addTodo(task) → Add a new todo with completed: false.
// completeTodo(id) → Mark a todo as completed.
// deleteTodo(id) → Delete a todo by id.
// listTodos() → Print all todos showing (✔️ / ❌) based on completed status.
let idCounter = 1;
const addTodo = (task) => {
    todos.push({ id: idCounter++, task: task, completed: false });
};
const completeTodo = id => {
    todos.forEach(item => {
        if(item.id === id) {
            item.completed = true;
        }
    })
} 

const deleteTodo = id => {
    const index = todos.findIndex(item => item.id === id);
    if(index !== -1) {
        return todos.splice(index,1);
    } else {
        return "Item not found";
    }
    
}

const remainingTodos = () => {
    let remainingTodos = 0;
    todos.forEach(todo => {
        if(todo.completed === false) {
            remainingTodos++;
        }
    });
    return console.log(`remaining Todos => ${remainingTodos}`);
}

const listTodos = () => {
    remainingTodos();
    todos.forEach(item => {
        const status = item.completed ? "✔️" : "❌";
        console.log(`${status} ${item.task}`);
    });
};
 
addTodo("Go to Shop");
addTodo("Read a Book");
addTodo("Write a Blog Post");
addTodo("Cook Dinner");
addTodo("Call Parents");
completeTodo(6);
deleteTodo(2);
listTodos();

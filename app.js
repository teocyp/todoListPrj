let input = prompt('What would you like to do?');
const todos = ['Feed the fishes', 'Water the flowers'];

while (input !== 'quit' && 'q') {
    if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(i, todos[i]);
        }
        console.log('**********');
    } else if (input === 'new') {
        const newTodo = prompt('Please enter your new todo..:');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`)
        } else {
            console.log('Not a valid index');
        }
    }
    input = prompt('What would you like to do?');
}

console.log('Okay, you quit!');
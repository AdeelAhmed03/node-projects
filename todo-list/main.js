import inquirer from "inquirer";
const todos = [];
let condition = true;
while (condition) {
    const addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}

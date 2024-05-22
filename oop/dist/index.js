import inquirer from "inquirer"
import { TaskManager } from "./TaskManager.js";
const taskManager = new TaskManager();
async function main() {
    while (true) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'Select an action:',
            choices: ['Add Task', 'Toggle Task Completion', 'List Tasks', 'Exit']
        });
        switch (action) {
            case 'Add Task':
                const { description } = await inquirer.prompt({ type: 'input', name: 'description', message: 'Enter task description:' });
                taskManager.addTask(description);
                console.log('Task added successfully!');
                break;
            case 'Toggle Task Completion':
                const tasks = taskManager.listTasks();
                const taskChoices = tasks.map((task) => ({ name: task.description, value: task.id }));
                const { taskId } = await inquirer.prompt({ type: 'list', name: 'taskId', message: 'Select task to toggle completion:', choices: taskChoices });
                taskManager.toggleTaskCompleted(taskId);
                console.log('Task completion toggled successfully!');
                break;
            case 'List Tasks':
                const allTasks = taskManager.listTasks();
                console.log('All Tasks:');
                allTasks.forEach((task) => console.log(`- [${task.completed ? 'x' : ' '}] ${task.description}`));
                break;
            case 'Exit':
                console.log('Exiting application.');
                return;
        }
    }
}
main();

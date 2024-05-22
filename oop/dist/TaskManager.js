import { Task } from "./Task.js";
export class TaskManager {
    tasks = [];
    taskIdCounter = 1;
    addTask(description) {
        const newTask = new Task(this.taskIdCounter++, description);
        this.tasks.push(newTask);
    }
    toggleTaskCompleted(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.toggleTaskCompleted();
        }
    }
    listTasks() {
        return this.tasks;
    }
}

import inquirer from "inquirer";

import { Task } from "./Task"

export class taskManager {
    private tasks: Task[] = [];
    private taskIdCounter: number = 1;

    addTask(description: string) {
        const newTask = new Task(this.taskIdCounter++, description);
        this.tasks.push(newTask);
    }

    toggleTaskCompleted(taskId: number) {
        const task = this.tasks.find(task => task.id === taskId)
        if (task) {
            task.toggleTaskCompleted();
        }
    }

    listTasks() {
        return this.tasks; 
    }
}
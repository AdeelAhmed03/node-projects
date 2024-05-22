export class Task {
    constructor(public id: number, public description: string, public completed: boolean = false) {}
        toggleCompleted() {
            this.completed = !this.completed;
        }
}
export class Task {
    id;
    description;
    completed;
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }
}

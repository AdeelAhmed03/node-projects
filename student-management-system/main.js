import inquirer from 'inquirer';
import * as uuid from 'uuid';
// Define classes
class Student {
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = uuid.v4().substr(0, 5); // Generate a 5-digit unique ID
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} enrolled in ${course}`);
    }
    viewBalance() {
        console.log(`${this.name}'s balance is $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`${this.name} paid $${amount} towards tuition.`);
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
// Array to store students
const students = [];
// Main function to interact with users
async function main() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add Student', 'Enroll Student', 'View Balance', 'Pay Tuition', 'Show Status', 'Exit'],
        },
    ]);
    if (action === 'Add Student') {
        const { name } = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter student name:',
            },
        ]);
        const newStudent = new Student(name);
        students.push(newStudent);
        console.log('New student added:');
        newStudent.showStatus();
    }
    else if (action === 'Enroll Student') {
        const { studentId, course } = await inquirer.prompt([
            {
                type: 'input',
                name: 'studentId',
                message: 'Enter student ID:',
            },
            {
                type: 'input',
                name: 'course',
                message: 'Enter course to enroll in:',
            },
        ]);
        const student = students.find(s => s.id === studentId);
        if (student) {
            student.enroll(course);
        }
        else {
            console.log('Student not found.');
        }
    }
    else if (action === 'View Balance') {
        const { studentId } = await inquirer.prompt([
            {
                type: 'input',
                name: 'studentId',
                message: 'Enter student ID:',
            },
        ]);
        const student = students.find(s => s.id === studentId);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log('Student not found.');
        }
    }
    else if (action === 'Pay Tuition') {
        const { studentId, amount } = await inquirer.prompt([
            {
                type: 'input',
                name: 'studentId',
                message: 'Enter student ID:',
            },
            {
                type: 'number',
                name: 'amount',
                message: 'Enter amount to pay:',
            },
        ]);
        const student = students.find(s => s.id === studentId);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log('Student not found.');
        }
    }
    else if (action === 'Show Status') {
        const { studentId } = await inquirer.prompt([
            {
                type: 'input',
                name: 'studentId',
                message: 'Enter student ID:',
            },
        ]);
        const student = students.find(s => s.id === studentId);
        if (student) {
            student.showStatus();
        }
        else {
            console.log('Student not found.');
        }
    }
    else if (action === 'Exit') {
        console.log('Exiting program.');
        return;
    }
    // Ask user if they want to perform another action
    const { continueAction } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'continueAction',
            message: 'Do you want to perform another action?',
            default: true,
        },
    ]);
    if (continueAction) {
        await main(); // Recursive call for next action
    }
    else {
        console.log('Exiting program.');
    }
}
// Start the program
main();

import inquirer from 'inquirer';
// Define a User class to represent bank users
class User {
    name;
    accountNumber;
    balance;
    constructor(name, accountNumber, balance = 0) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('Insufficient funds!');
        }
    }
    checkBalance() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: $${this.balance}`);
    }
}
// Array to store user accounts
const users = [];
// Function to create a new user account
async function createAccount() {
    const { name, initialDeposit } = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'Enter your name:' },
        { type: 'number', name: 'initialDeposit', message: 'Enter initial deposit amount:' }
    ]);
    const accountNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    const newUser = new User(name, accountNumber, initialDeposit);
    users.push(newUser);
    console.log('Account created successfully!');
    console.log(`Your account number is: ${accountNumber}`);
}
// Function to perform actions for an existing user
async function existingUserActions(user) {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: ['Deposit', 'Withdraw', 'Check Balance', 'Exit']
    });
    switch (action) {
        case 'Deposit':
            const { depositAmount } = await inquirer.prompt({ type: 'number', name: 'depositAmount', message: 'Enter deposit amount:' });
            user.deposit(depositAmount);
            console.log('Deposit successful!');
            break;
        case 'Withdraw':
            const { withdrawAmount } = await inquirer.prompt({ type: 'number', name: 'withdrawAmount', message: 'Enter withdrawal amount:' });
            user.withdraw(withdrawAmount);
            break;
        case 'Check Balance':
            user.checkBalance();
            break;
        case 'Exit':
            return;
    }
    await existingUserActions(user);
}
// Main function to run the bank app
async function main() {
    while (true) {
        const { userType } = await inquirer.prompt({
            type: 'list',
            name: 'userType',
            message: 'Are you a new user or an existing user?',
            choices: ['New User', 'Existing User', 'Exit']
        });
        switch (userType) {
            case 'New User':
                await createAccount();
                break;
            case 'Existing User':
                const { accountNumber } = await inquirer.prompt({ type: 'input', name: 'accountNumber', message: 'Enter your account number:' });
                const existingUser = users.find(user => user.accountNumber === accountNumber.toUpperCase());
                if (existingUser) {
                    await existingUserActions(existingUser);
                }
                else {
                    console.log('User not found!');
                }
                break;
            case 'Exit':
                return;
        }
    }
}
main();

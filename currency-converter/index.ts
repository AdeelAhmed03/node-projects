import inquirer from "inquirer";

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278.75
}

const answers = await inquirer.prompt ([
    {
        name: "from",
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    },
]);

let fromCurrency = currency[answers.from]; // exchange rate
let toCurrency = currency[answers.to]; // exchange rate
let amount = answers.amount;
let baseAmount = amount / fromCurrency; // USD base currency
let convertedAmount = baseAmount * toCurrency

console.log(Math.floor(Math.ceil(convertedAmount)));
// console.log(fromCurrency);
// console.log(toCurrency);
// console.log(amount);

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
console.log("Your current balance is: ", myBalance);
let myPin = 1234;

const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number: ",
        type: "number",
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "What you want to do?",
                type: "list",
                choices: ["withdraw", "check balance", "200", "500", "1000"],
                checkBalance: "check balance",
            }
        ]
    );

    if (operationAns.operation === "withdraw") {
       let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]
       );
    
       myBalance -= amountAns.amount;
       console.log(`Your remaining balance is: ${myBalance}`);
    } 
    else if (operationAns.operation === "check balance"){
        console.log(`Your balance is: ${myBalance}`);
} else {
    console.log("Incorrect pin number");
}
}

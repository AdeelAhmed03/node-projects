#!  /usr/bin/env node
import inquirer from "inquirer";
const userAnswers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Specify your sentence to count the word"
    }
]);
const words = userAnswers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence word count is ${words.length}`);
console.log();

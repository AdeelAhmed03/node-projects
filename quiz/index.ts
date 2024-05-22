import inquirer from "inquirer";

// Define the quiz questions and answers

const quizQuestions = [
    {
        question: 'What is the capital of France?',
        choices: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        choices: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Emily Bronte'],
        correctAnswer: 'William Shakespeare'
    },
    {
        question: "Please select a level",
        choices: ['Low','Medium', 'High'],
        correctAnswer: 'High'
    }
];

// Function to start the quiz
async function startQuiz() {
    let score = 0;

    console.log('Welcome to the Quiz!\n');

    for (const questionObj of quizQuestions) {
        const { answer } = await inquirer.prompt({
            type: 'list',
            name: 'answer',
            message: questionObj.question,
            choices: questionObj.choices
        });

        if (answer === questionObj.correctAnswer) { 
            console.log('Correct!\n');
            score += 1;
        } else {
            console.log(`Incorrect. The correct answer is: ${questionObj.correctAnswer}\n`);
        }
    }

    const passingScore = Math.floor(quizQuestions.length * 0.7)
    console.log(`Your marks: ${score}/${quizQuestions.length}`);

    if (score >= passingScore) {
        console.log('Congratulations, you passed the quiz!');
    } else {
        console.log('Sorry, you did not pass. Better luck next time!');
    }

    console.log(`Your Score: ${score} out of ${quizQuestions.length}\n Quiz Complete!`);
}

// Main function to run the quiz app
async function main() {
    await startQuiz();
}

main();



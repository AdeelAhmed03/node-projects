import inquirer from "inquirer";
async function startCountdownTimer() {
    const { duration } = await inquirer.prompt([
        {
            type: "number",
            name: "duration",
            message: "Enter the duration of countdown timer (in seconds):"
        }
    ]);
    let remainingSeconds = duration;
    const timer = setInterval(() => {
        //console.clear();
        console.log(`Countdown timer: ${remainingSeconds} seconds remaining`);
        remainingSeconds--;
        if (remainingSeconds < 0) {
            clearInterval(timer);
            console.log('Time\'s up!');
        }
    }, 1000);
}
async function main() {
    console.log('Welcome to the countdown Timer!\n');
    await startCountdownTimer();
}
main();

import inquirer from 'inquirer';

// Define scenes for the game
const scenes: { [key: string]: any } = {
    start: {
        title: 'Start',
        description: 'You wake up in a mysterious forest. You see a path leading to a clearing.',
        options: [
            { choice: 'Follow the path to the clearing', nextScene: 'clearing' },
            { choice: 'Stay where you are', nextScene: 'stay' }
        ]
    },
    clearing: {
        title: 'Clearing',
        description: 'You arrive at a peaceful clearing with a small pond. You notice a cabin nearby.',
        options: [
            { choice: 'Investigate the cabin', nextScene: 'cabin' },
            { choice: 'Go back to the forest', nextScene: 'start' }
        ]
    },
    cabin: {
        title: 'Cabin',
        description: 'You approach the cabin and hear strange noises coming from inside.',
        options: [
            { choice: 'Enter the cabin', nextScene: 'enterCabin' },
            { choice: 'Return to the clearing', nextScene: 'clearing' }
        ]
    },
    enterCabin: {
        title: 'Inside the Cabin',
        description: 'You enter the cabin and find a treasure chest.',
        options: [
            { choice: 'Open the chest', nextScene: 'openChest' },
            { choice: 'Leave the cabin', nextScene: 'clearing' }
        ]
    },
    openChest: {
        title: 'Treasure!',
        description: 'You open the chest and find gold coins. Congratulations, you win!',
        options: []
    },
    stay: {
        title: 'Stay Put',
        description: 'You decide to stay where you are.',
        options: [
            { choice: 'Continue waiting', nextScene: 'wait' },
            { choice: 'Explore the forest', nextScene: 'start' }
        ]
    },
    wait: {
        title: 'Waiting',
        description: 'Time passes by as you wait. Nothing seems to happen.',
        options: [
            { choice: 'Keep waiting', nextScene: 'wait' },
            { choice: 'Explore the forest', nextScene: 'start' }
        ]
    }
};

// Function to play the game
async function playGame(currentScene: string) {
    const scene = scenes[currentScene];

    console.log(`\n--- ${scene.title} ---`);
    console.log(scene.description);

    if (scene.options.length === 0) {
        console.log('\n--- Game Over ---');
        return;
    }

    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What do you want to do?',
        choices: scene.options.map((option: { choice: any; }) => option.choice)
    });

    const chosenOption = scene.options.find((option: { choice: any; }) => option.choice === choice);
    if (chosenOption) {
        await playGame(chosenOption.nextScene);
    }
}

// Main function to start the game
async function main() {
    console.log('Welcome to the Adventure Game!\n');

    await playGame('start');
}

main();

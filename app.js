#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import showBanner from "node-banner";
let score = 0;
let rightAnswer = true;
//(max - min + 1)) + min
// Math.ceil(Math.random()*10);
(async () => {
    await showBanner('USverse', 'Guessing World', 'green');
})();
const rainbow = chalkAnimation.rainbow('  Panaverse DAO'); // Animation starts
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 1000);
async function guessing() {
    while (rightAnswer) {
        let guessNumber = Math.ceil(Math.random() * (4 - 1 + 1)) + 1;
        // console.log(guessNumber);
        let answers = await inquirer.prompt([{
                name: "userGuess",
                type: "number",
                message: "Guess the Number from 1 to 5"
            }]);
        if (answers.userGuess == guessNumber) {
            score += 10;
            console.log(chalk.green("Correct Answer"));
            console.log("You got ", chalk.green(`+${10} points =`), "Total", chalk.yellow(`${score}`));
        }
        else {
            rightAnswer = false;
            console.log(chalk.red("Wrong Answer"));
            console.log("Your total scores = ", chalk.green(`${score} points`));
        }
    }
}
setTimeout(guessing, 3000);

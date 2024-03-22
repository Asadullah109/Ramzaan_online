// 1) computer will generate a random number -Done.
// 2) user input for gussing number - Done
// 3) compare user input with computer generated number and show result
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulation! you guessed right number. ");
}
else {
    console.log("you gussed wrong number");
}
export {};

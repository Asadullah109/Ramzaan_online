#!/usr /bin /env/ node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1) computer will generate a random number -Done.
// 2) user input for gussing number - Done
// 3) compare user input with computer generated number and show result
var randomNumber = 13;
var answers = await inquirer_1.default.prompt([
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

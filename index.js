#! /usr/bin/env node
import inquirer from "inquirer";
// 1- computer will generate a random number
// 2- user-input for guessing number
// 3- compare user-input and computer-genrated number
const random_Number = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number Between: 1-10 \n\ Your Answer:",
    },
]);
if (answer.UserGuessedNumber === random_Number) {
    console.log("Congrats! you Guessed the Number");
}
else {
    console.log("Wrong number, Try Again.");
}

#! /usr/bin/env node

import inquirer from "inquirer";

console.log("welcome to Code_with_Kamran_CLI_Number_Guessing_Game");

const randomNumber = Math.floor(Math.random()* 5 +1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number from 1 to 5",
    },
]);

if(answer.userGuessNumber === randomNumber){
    console.log("Congratulation! you guessed a correct number.")
}
else{
    console.log("Sorry! you Guessed a wrong number please try again thanks.")
}
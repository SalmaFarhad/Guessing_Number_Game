#! /usr/bin/env node

import inquirer from "inquirer";


// 1) Computer will generate a randam number

// 2) User input for gussing number - Done

// 3) Compare user input with computer  generated number and show  the result.

const randomnumber = Math.floor(Math.random() * 10 + 1)



const anwser = await inquirer.prompt([
    {
        name:"userinputnumber",
        type: "number",
        message: "Enter gusse a number between 1-10"

    },
]);

if(anwser.userinputnumber === randomnumber){
    console.log("Congtraulation ! you gussed right Number.");
}else{
    console.log("You gussed wrong number Game  Over Try  again.");
};
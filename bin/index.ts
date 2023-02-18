#! /usr/bin/env node
import chalk from "chalk"
import inquirer from "inquirer"

import chalkAnimation from "chalk-animation"
import { randomFillSync, randomInt } from "crypto"


console.log(" ...................... Wellcome to the Number Guessing Game ................................")

let randomNumber: number = Math.floor(Math.random() * 10)

let score:number = 0;



async function playMatch() {
    
    await inquirer.prompt([{
        type:"number",
        name:"Question",
        message:`Please guess any number between 1 and 10...      Your Score is : ${score} `
        
    },

    
    ]).then((answers)=>{
        if(answers.Question == randomNumber){
            console.log(chalk.green("Your Guess is Right. Number to be Guessed is",randomNumber))
            score = score+10;
        }
        else{
            console.log(chalk.red("Sorry, Your Guess in not Right. Please Try Again "))
            if(score==0){
                score=0;
            }
            else{
                score = score-1;
            }
            
        }
    })
    
}


async function againPlayMatch() {

    do{
     await playMatch();
     console.log("\n")
     var option = await inquirer.prompt([{
        type:"input",
        message:chalk.green("Press Y to Play Again .........."),
        name:"question",
     }])
    }while(option.question == "y"||option.question == "Y"||option.question == "YES" ||option.question =="yes" || option.question == "Yes")
    
};

againPlayMatch()



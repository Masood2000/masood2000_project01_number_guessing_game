#! /usr/bin/env node
import chalk from "chalk"
import inquirer from "inquirer"

import PromptSync from "prompt-sync"
import chalkAnimation from "chalk-animation"




let input = PromptSync()

console.log(" ...................... Wellcome to the Number Guessing Game ................................")



let score:number = 0;



function playMatch() {
    
    let randomNumber: number = Math.floor(Math.random() * 10)

    while(true){

    let num:number = parseInt(input(`Please guess any number between 1 and 10...      Your Score is : ${score} `))


        if(num == randomNumber){
            console.log(chalk.green("Your Guess is Right. Number to be Guessed is",randomNumber))
            score = score+10;
            break;
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
    }
    
}




async function againPlayMatch() {

    let ans:string;
    
    do{
        playMatch();
     console.log("\n")
      ans= input(chalk.green("Press Y to Play Again .........."))

    }while(ans == "y"||ans == "Y"||ans == "YES" ||ans =="yes" || ans == "Yes")
    
};

againPlayMatch()



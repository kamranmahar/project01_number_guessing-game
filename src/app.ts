#! /usr/bin/env node
import inquirer  from 'inquirer';
import { excuteGuess,game} from './game.js'
let again=[
    {
        name:"continueagain",
        type:'checkbox',
        message:"Do You want to calculate again",
        choices:[
            "Yes","No"
        ]
    }
];
let options=[{
    name:"guessedNumber",
    type:"number",
    message:"Please Guess New Number "

}];
let currentGame:game={
    roundAttempt:5,
    currentdAttempt:0,
    noToGuess:Math.round(Math.random()*10), 
};


let continueGame =async ()=>{
    
    let {continueagain}= await inquirer.prompt(again);
        if(continueagain[0]=="Yes")
            {
                excute();
            }
}


    let excute=async ()=>{

        let {guessedNumber} = await inquirer.prompt(options);
     
        currentGame.currentdAttempt ++;
        
        
        console.log(currentGame.noToGuess);
        excuteGuess(guessedNumber,currentGame.noToGuess);
        if(guessedNumber==currentGame.noToGuess)
        {
            console.log(`It took you ${currentGame.currentdAttempt} turns to guess ${currentGame.noToGuess} number.`); 
            currentGame.currentdAttempt=0;
            currentGame.noToGuess=Math.round(Math.random()*20);
            continueGame();
           
        }
       else if(currentGame.roundAttempt==currentGame.currentdAttempt)
        {
            console.log(`You are failed to Guess   ${currentGame.noToGuess} number. Even It took you ${currentGame.currentdAttempt} turns`); 
            currentGame.currentdAttempt=0;
            continueGame();
        }else
        {
            excute();
        }
    }
    console.log(`You have ${currentGame.roundAttempt} Attemps to Guess Number`)
    excute();
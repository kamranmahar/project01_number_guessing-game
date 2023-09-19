export let excuteGuess=(num:number,secrete:number)=>{
  


        if(secrete<num)
        {
            console.log(`Your guess, ${num}, is too high.`);
        }else if(secrete>num){
            console.log(`Your guess, ${num}, is too small.`);
        }
       
  
}

 type game={
    roundAttempt:number,
    currentdAttempt:number,
    noToGuess:number,   
} 

export {game}
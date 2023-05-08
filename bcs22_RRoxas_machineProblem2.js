let userIncrement = 0;


 function getRandom(a){
   return Math.floor(Math.random()*a);
 };

let guess = getRandom(101);

  while(userIncrement <10){
  let userGuess = prompt("Guess a Number Between 1 and 100: ");
  

if(userGuess < guess){
	alert("Too Low! Guess Again.")
	userIncrement++;
}

else if(userGuess > guess){
	alert("Too High! Guess Again.");
	userIncrement++;
}

else if(userGuess == guess){
	alert("Congratulations, you guessed the number in 10 tries!");
     userIncrement++;
}

 }






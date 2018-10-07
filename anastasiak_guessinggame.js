let max = 50;
let min = 1;
let randomNum = Math.floor(Math.random() * (max - min +1)) + min;
//let randomNum = 10;

let pastGuesses = [];


for (let i = 0; i < 10; i++) {
  alert(`You are playing "Guess a number from ${min} to ${max} Game!". You have ${10 - i} guesses to win!`);

  let userguess = prompt("What is your guess?");
  userguess = parseInt(userguess);
  console.log('userguess', userguess);

  pastGuesses.push(userguess);
  console.log(pastGuesses);

  if (randomNum == userguess) {
    alert("Congratulations!You guessed right.");
    break; 
  }

  if (i==9) {
    alert(`"Mày bị hâm à? The random number was ${randomNum}. Game over!`);
  } else if (randomNum > userguess) {
    alert(`Your guess is too low! Try one more time. Your past guesses: ${pastGuesses.toString()}.`);
  } else if (randomNum < userguess) {
    alert(`Your guess is too high!Try one more time. Your past guesses: ${pastGuesses.toString()}.`);
  }
}

console.log('randomNum', randomNum);

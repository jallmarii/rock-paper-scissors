// Make computer value
// Take player value
// Define how values should be compared
// Compare them
// Display the results


// Take input and standardize it for further use and to display later
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

// Define the variables first and spend 2 hours learning what hoisting does
// It's good to define all related variables first then the functions that deal with them after
const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice() 

// Roughly 1/3 chance for any option and return it to store in computerChoice
function getComputerChoice() {
  let num = Math.random() * 3
  let computerChoice;
      if (num <= 1) {
      computerChoice = 'Rock';
    } else if (num <= 2) {
      computerChoice = 'Paper';
    } else if (num <= 3) {
      computerChoice = 'Scissors'
    }
  return computerChoice;
}

function getPlayerChoice() {
    // this is an array!
  const validChoices = ['Rock', 'Paper', 'Scissors'];
  let playerChoice = capitalize(prompt('Rock, Paper or Scissors?').trim());
    // get prompt, trim whitespace, then apply custom function capitalize() to whats left
    // .trim().capitalize()) isnt allowed because its explicit chaining & javascript not like that 
    // so, prompt, then trim is applied, then that result is encapsulated by capitalize() so it works
    // chaining this way is slightly cooler and significantly less readable than just doing them line by line

    // chatgpt says to include null, empty or undefined as edge case protection
    // i started off with just "if validchoices dont include playerchoice" and was pretty excited
  if ( 
    playerChoice === null || 
    playerChoice === '' ||    
    playerChoice === undefined ||
    (!validChoices.includes(playerChoice))  
  ) {
    alert("Didn't work, refresh and type in just the word!");
    return null; // return null so mr.computer knows / maintain the flow of the program
                 // if i dont have this, it would return undefined, which is not as obvious
  }
   
  return playerChoice; // return the choice to its variable
}

// This is more readable than a switch statement because there are multiple conditions & multiple variables
// There are two parameters for the function
function whoWins(playerChoice, computerChoice) {

  // easy part first
  if (playerChoice === computerChoice) 
  { 
    alert(`It's a tie! You both chose ${computerChoice}.`);
  } 
    
    // thanks to capitalize() it's just a few things instead of a spiderweb
    else if (
    (playerChoice === 'Rock') && (computerChoice === 'Scissors') ||
    (playerChoice === 'Paper') && (computerChoice === 'Rock') ||
    (playerChoice === 'Scissors') && (computerChoice === 'Paper')
  ) {
    alert(`You won! ${playerChoice} beats ${computerChoice}!`);

    // if you dont tie or win, there's only one other option
  } else {                                   // escaping the frownie face but i dont think it matters
    alert(`You lost! ${computerChoice} beats ${playerChoice} \:(`) 
  }
}

/* 
If playerChoice was caught by the error checking on line 43, don't continue the game

I did it with

if (playerChoice) {
  whoWins(playerChoice, computerChoice);
}

Then learned there's an epic shorthand way to do it
*/

// If left operator is truthy, evaluate right operator
playerChoice && whoWins(playerChoice, computerChoice);

// We define both variables/parameters: playerChoice, computerChoice
// We determine their value/arguments: Rock, Paper or Scissors
// We call whoWins() to explain the winner 
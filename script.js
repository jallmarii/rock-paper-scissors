// Make computer value
// Take player value
// Define how values should be compared
// Compare them
// Display the results

// Utility function to standardize input
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

// Roughly 1/3 chance for any option and return it to store in computerChoice
// Chatgpt showed a better way to do this but I don't understand it yet
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
  const validChoices = ['Rock', 'Paper', 'Scissors'];
  let playerChoice = capitalize(prompt('Rock, Paper or Scissors?').trim());
    // get prompt, trim whitespace, then apply custom function capitalize() to whats left
    // .trim().capitalize()) isnt allowed because its explicit chaining & javascript not like that 
    // so, prompt, then trim is applied, then that result is encapsulated by capitalize() so it works
    // chaining this way is slightly cooler and significantly less readable than just doing them line by line

    // chatgpt says to include null, empty or undefined as edge case protection
  while ( 
    playerChoice === null || 
    playerChoice === '' ||    
    playerChoice === undefined ||
    (!validChoices.includes(playerChoice))  
  ) {
    alert("Didn't work, refresh and type in just the word!");
    return null; // return null so mr.computer knows / maintain the flow of the program
                 // if i dont have this, it returns undefined, which is not as obvious
  }
  return playerChoice; 
}

// Global variables to track score
// Chatgpt says to make an object but that concept is too complicated for my puny human brain to understand
let win = 0;
let tie = 0;
let lose = 0;

// This is more readable than a switch statement because there are multiple conditions & multiple variables
function getWinner(computerChoice, playerChoice) {
  // easy part first
  if (computerChoice === playerChoice) 
  { 
    alert(`It's a tie! You both chose ${computerChoice}.`);
    return tie += 1; 
  } 
    else if (
    (playerChoice === 'Rock') && (computerChoice === 'Scissors') ||
    (playerChoice === 'Paper') && (computerChoice === 'Rock') ||
    (playerChoice === 'Scissors') && (computerChoice === 'Paper')
  ) {
    alert(`You won! ${playerChoice} beats ${computerChoice}!`);
    return win += 1;

    // if you dont tie or win, there's only one other option
  } else {                                  
    alert(`You lost! ${computerChoice} beats ${playerChoice} \:(`) //escaping the :( even if it doesn't matter right now)
    return lose += 1;
  }
}

// Loop for 5 games total - do I capitalize this? I don't camelCase it I think
const total_games = 5;
for (let i = 1; i <= total_games; i++) {

  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();

  if (playerChoice) {
    console.log(`Game ${i}`);
    getWinner(computerChoice, playerChoice);
    console.log(`Your current record is ${win} wins, ${lose} losses, and ${tie} ties`);
  } 
}

// We define both variables/parameters: playerChoice, computerChoice
// We determine their value/arguments: Rock, Paper or Scissors
// We call whoWins() to explain the winner 
// We put this call into a for-loop to play 5 games






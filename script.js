// Make computer value
// Take player value
// Define how values should be compared
// Compare them
// Display the results


// Take input and standardize it for further use and to display later
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

// I have to define the variables first, it could be below the function due to HOISTING
const computerChoice = getComputerChoice();

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

// Define playerChoice
const playerChoice = getPlayerChoice() 

function getPlayerChoice() {
    // valid choices only!
  const validChoices = ['Rock', 'Paper', 'Scissors'];
  let playerChoice = capitalize(prompt('Rock, Paper or Scissors?').trim());
    // get prompt, then trim any whitespace & convert it to all lowercase for processing

    // chatgpt says to include null, empty or undefined as edge case protection
    // i started off with just "if validchoices dont include playerchoice" and was very proud of myself
  if ( 
    playerChoice === null || 
    playerChoice === '' ||    
    playerChoice === undefined ||
    (!validChoices.includes(playerChoice))  
  ) {
    alert("Didn't work, reload and try again!");
    return null; // return null just so mr.computer knows / maintain the flow of the program
  }
   
  return playerChoice; // return the choice to its variable
}

// This is more readable than a switch statement because there are multiple conditions & multiple variables
// There are two parameters that go into the function

function whoWins(playerChoice, computerChoice) {
  // easy part first
  if (playerChoice === computerChoice) 
  { 
    alert(`It's a tie! You both chose ${computerChoice}.`);
  } 
    
    // thanks to capitalize() it's just a few things instead of a spiderweb
    // to me this was the hardest part. 
    // maybe i could do it linking stuff like ${playerChoice} but smarter
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

// We define both variables/parameters: playerChoice, computerChoice
// We determine their value/arguments: Rock, Paper or Scissors
// We create the logic of how they compare using whoWins()
// We call whoWins() to explain the winner 

whoWins(playerChoice, computerChoice);

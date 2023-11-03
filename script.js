// I changed this from console.log to having a gui with buttons to click, 
// so some comments/unfction now will not make sense & I am not going to rewrite them :)

// Utility function to standardize input
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

// Roughly 1/3 chance for any option and return it to store in computerChoice
// Chatgpt showed a better way to do this but I'm not gonna blindly copy
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

    // include null, empty or undefined as edge case protection + practice a while loop
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
let wins = 0
let ties = 0
let losses = 0

// This is more readable than a switch statement because there are multiple conditions & multiple variables
function getWinner(computerChoice, playerChoice) {
  // easy part first
  if (computerChoice === playerChoice) { 
    ties++
    return 'tie';
  } 
    else if (
    (playerChoice === 'Rock') && (computerChoice === 'Scissors') ||
    (playerChoice === 'Paper') && (computerChoice === 'Rock') ||
    (playerChoice === 'Scissors') && (computerChoice === 'Paper')
  ) {
    wins++
    return 'win';
    // if you dont tie or win, there's only one other option
  } else {   
    losses++
    return 'lose';
  }        
}

// with my newfound knowledge, i will make a record list, score list and buttons to press
// I will also make the game end after ten games because 5 is too few

let totalGames = 0

// harness the ul as scoreList
const scoreList = document.querySelector('ul');

// function for my scoreList and updated the scoreboard, it would probably be best practice to break them into two functions
function displayResult(result, computerChoice, playerChoice) {
  let message = '';

  if (result === 'tie') {
    message = `Both chose ${playerChoice} - ......TIE!!!`;
  } else if (result === 'win') {
    message = `${playerChoice} beat ${computerChoice} - VICTORY!!!`;
  } else if (result === 'lose') {
    message = `${playerChoice} lost to ${computerChoice} - DEFEAT!!!`;
  }

  // create a list item in my scoreList with message and attach it to ul
  const li = document.createElement('li');
  li.textContent = message;
  scoreList.appendChild(li)

  // also update the scoreboard with numbers - easier than i thought it would be
  document.querySelector('#divWins').textContent = `Wins: ${wins}`
  document.querySelector('#divLosses').textContent = `Losses: ${losses}`
  document.querySelector('#divTies').textContent = `Ties: ${ties}`

  // I forgot to run the function and wondered why it wasn't checking! :P It's a mess putting this all in one function
  totalGames++;
  checkTotalGamesState();
}

// harness the power of buttons
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');

// if clicked, run computerchoice(), put rock into playerChoice, run getwinner with this stuff, displayResult
rock.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = 'Rock';
  const result = getWinner(computerChoice, playerChoice);
  displayResult(result, computerChoice, playerChoice);
});

paper.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = 'Paper';
  const result = getWinner(computerChoice, playerChoice);
  displayResult(result, computerChoice, playerChoice);
})

scissors.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = 'Scissors';
  const result = getWinner(computerChoice, playerChoice);
  displayResult(result, computerChoice, playerChoice);
})

// Put the totalgames logic after everything to make sure it catches the increment + it makes sense anyway
function checkTotalGamesState() {
  if (totalGames >= 10 && wins > losses) {
    alert('After a hard battle, you have beaten Mr.Computer in a match of ROCK PAPER SCISSORS!!! Refresh to play again!');
  } else if (totalGames >= 10 && losses > wins) {
    alert('After a hard battle, you have LOST to MR. COMPUTER!! Oh no!!!! Refresh to try again!')
  } else if (totalGames >= 10 && losses === wins) {
    alert('The match ends in a DRAW!!! Who will win the next game??? Refresh to find out!');
  }
}

// We define both variables/parameters: playerChoice, computerChoice
// We determine their value/arguments: Rock, Paper or Scissors
// We call whoWins() to explain the winner 

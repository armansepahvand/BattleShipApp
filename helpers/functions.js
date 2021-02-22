const { questions } = require('./objects');
const inquirer = require('inquirer');
//set a counter
let i = 0;

/*Recursive function to ask players to input their shots
it will validate the inputs to be in the board range and
of length of 2. it will check if the shot is good or not and 
print out relative message on console. if each of the players
sink the others player's ship or they end in a draw it will 
 print the results */
module.exports = function askFunction(player1ShipSlots, player2ShipSlots) {
  //prompt for players shots
  inquirer.prompt(questions.fireMisile).then((answers) => {
    player1Shot = answers.player1Fire;
    player2Shot = answers.player2Fire;

    /*get the ship slots for each player only for the first time 
    the function runs and for the rest of the recursions it player
     ship remains local*/
    if (i == 0) {
      player1Ship = player1ShipSlots;
      player2Ship = player2ShipSlots;
    }
    i++;

    /*Check if each player's shot is in the other player's playerShip array 
    and if it is, print "Good Shot" and if not print missed message */
    player2Ship.indexOf(player1Shot) >= 0
      ? (console.log('good shot player1'),
        player2Ship.splice(player2Ship.indexOf(player1Shot), 1))
      : console.log('Ooops, Player1 missed');
    player1Ship.indexOf(player2Shot) >= 0
      ? (console.log('good shot player2'),
        player1Ship.splice(player1Ship.indexOf(player2Shot), 1))
      : console.log('Ooops, Player2 missed');

    /*If statement to check if the game is finished or not; 
    If the length of the array for both ships  is not zero function calls itself */
    if (player1Ship.length != 0 && player2Ship.length != 0) {
      askFunction();
    }
    // the game is finished and the else statement checks who has one the game or if it is a draw
    else {
      if (player1Ship.length == 0 && player2Ship.length != 0) {
        console.log('Player2 won the game');
      } else if (player2Ship.length == 0 && player1Ship.length != 0) {
        console.log('Player1 Won the game');
      } else {
        console.log('Wow, its a draw');
      }
    }
  });
};

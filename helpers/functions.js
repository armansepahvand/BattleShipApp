const { questions } = require('./objects');
const inquirer = require('inquirer');
let i = 0;
module.exports = function askFunction(player1ShipSlots, player2ShipSlots) {
  inquirer.prompt(questions.fireMisile).then((answers) => {
    player1Shot = answers.player1Fire;
    player2Shot = answers.player2Fire;

    if (i == 0) {
      player1Ship = player1ShipSlots;
      player2Ship = player2ShipSlots;
    }
    i++;

    player2Ship.indexOf(player1Shot) >= 0
      ? (console.log('good shot player1'),
        player2Ship.splice(player2Ship.indexOf(player1Shot), 1))
      : console.log('Ooops, Player1 missed');
    player1Ship.indexOf(player2Shot) >= 0
      ? (console.log('good shot player2'),
        player1Ship.splice(player1Ship.indexOf(player2Shot), 1))
      : console.log('Ooops, Player2 missed');

    if (player1Ship.length != 0 && player2Ship.length != 0) {
      askFunction();
    } else {
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

const program = require('commander');
const inquirer = require('inquirer');

const Player = require('./classes/Player');
const { questions } = require('./helpers/objects');
const askFunction = require('./helpers/functions');

let player1 = new Player();
let player2 = new Player();
let player1Ship = player1.battleShip;
let player2Ship = player2.battleShip;

program.version('1.0.0').description('BattleShip Game');

program
  .command('start')
  .alias('s')
  .description('Starting the game')
  .action(() => {
    inquirer.prompt(questions.startQuestion).then((answers) => {
      if (!answers.startQuestion) {
        process.exit();
      }
      inquirer.prompt(questions.shipQuestion).then((answers) => {
        player1Ship.setShipSlots = answers.player1ShipArrangement;
        player2Ship.setShipSlots = answers.player2ShipArrangement;
        player1ShipSlots = player1Ship.shipSlots;
        player2ShipSlots = player2Ship.shipSlots;
        askFunction(player1ShipSlots, player2ShipSlots);
      });
    });
  });
program.parse(process.argv);

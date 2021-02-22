const program = require('commander');
const inquirer = require('inquirer');

const Player = require('./classes/Player');
const { questions } = require('./helpers/objects');
const askFunction = require('./helpers/functions');

//Create two player objects from Player Class
let player1 = new Player();
let player2 = new Player();

//Put each player battleShip in relative variable
let player1Ship = player1.battleShip;
let player2Ship = player2.battleShip;

//Initiate a program instance and set the program version and description
program.version('1.0.0').description('BattleShip Game');

program
  .command('start')
  .alias('s')
  .description('Starting the game')
  .action(() => {
    //Ask users if they want to play the game
    inquirer.prompt(questions.startQuestion).then((answers) => {
      //If the answer is No exit the program
      if (!answers.startQuestion) {
        process.exit();
      }
      //start asking for players input
      inquirer.prompt(questions.shipQuestion).then((answers) => {
        //Ask th players to place their ships on board
        player1Ship.setShipSlots = answers.player1ShipArrangement;
        player2Ship.setShipSlots = answers.player2ShipArrangement;

        //get the players ship slots as an array of strings Ex:["a1","a2","a3"]
        let player1ShipSlots = player1Ship.shipSlots;
        let player2ShipSlots = player2Ship.shipSlots;

        /*Recursive function to ask players to input their shots
         it will validate the inputs to be in the board range and
         of length of 2. it will check if the shot is good or not and 
         print out relative message on console. if each of the players
         sink the others player's ship or they end in a draw it will 
         print the results */
        askFunction(player1ShipSlots, player2ShipSlots);
      });
    });
  });
program.parse(process.argv);

const GameBoard = require('../classes/BattleShipBoard');
gameBoard = new GameBoard();
module.exports = {
  questions: {
    startQuestion: [
      {
        prefix:
          '***All the ships and shot slots selected in this game should be in the game board range\n' +
          '***The boad has a widt of a to h and a hieght of 1 to 8\n' +
          '***An example of input for a ship is "a2b2c2" and for a shot is"a2"\n',
        type: 'confirm',
        name: 'startQuestion',
        message: 'Are you ready to start the game?',
      },
    ],
    shipQuestion: [
      {
        type: 'password',
        name: 'player1ShipArrangement',
        message: 'Player1_Please place your ship:',
        validate: function (value) {
          let rangePass = gameBoard.isShipInRange(value);
          let lengthPass = value.length;
          if (lengthPass != 6) {
            return 'please select exactly 3 slots (6 characters) for your ship';
          }

          if (!rangePass) {
            return 'please place your ship in the range of the board(width:a-h, height:1-8):';
          }

          return true;
        },
      },
      {
        type: 'password',
        name: 'player2ShipArrangement',
        message: 'Player2_Please Please place your ship:',
        validate: (value) => {
          let rangePass = gameBoard.isShipInRange(value);
          let lengthPass = value.length;
          if (lengthPass != 6) {
            return 'please select exactly 3 slots (6 characters) for your ship';
          }

          if (!rangePass) {
            return 'please place your ship in the range of the board(width:a-h, height:1-8):';
          }

          return true;
        },
      },
    ],
    fireMisile: [
      {
        type: 'input',
        name: 'player1Fire',
        message: `Player1_ fire at a slot on player2's board:`,
        validate: (value) => {
          let rangePass = gameBoard.isShipInRange(value);
          let lengthPass = value.length;
          if (lengthPass != 2) {
            return 'please select exactly 2 characters for your shot, hit backspace to change your answer';
          }

          if (!rangePass) {
            return 'please place your ship in the range of the board(width:a-h, height:1-8), hit backspace to change your answer';
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'player2Fire',
        message: `Player2_ fire at a slot on player1's board:`,
        validate: (value) => {
          let rangePass = gameBoard.isShipInRange(value);
          let lengthPass = value.length;
          if (lengthPass != 2) {
            return 'please select exactly 2 characters for your shot, hit backspace to change your answer';
          }

          if (!rangePass) {
            return 'please place your ship in the range of the board(width:a-h, height:1-8), hit backspace to change your answer';
          }

          return true;
        },
      },
    ],
  },
};

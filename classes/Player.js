const BattleShip = require('../classes/BattleShip');
const BattleShipBoard = require('./BattleShipBoard');

//A class to create player object that has a battleShipBoard object and a battleShip object
module.exports = class Player {
  constructor() {
    this.battleShip = new BattleShip();
    this.battleShipBoard = new BattleShipBoard();
  }

};

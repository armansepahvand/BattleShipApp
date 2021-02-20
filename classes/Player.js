const BattleShip = require('../classes/BattleShip');
const BattleShipBoard = require('./BattleShipBoard');

module.exports = class Player {
  constructor() {
    this.name = '';
    this.battleShip = new BattleShip();
    this.battleShipBoard = new BattleShipBoard();
  }

  /**
   * @param {string} value
   */
  set setName(value) {
    this.name = value;
  }

  fire(targetCoord) {
    return targetCoord;
  }
};

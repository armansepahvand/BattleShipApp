//A class to create the battleship objects by asking the player to input the
//starting slot, number of slots and orientation of the ship
module.exports = class BattleShip {
  constructor(shipslots = 'a1a2a3') {
    this.shipslots = shipslots.match(/.{1,2}/g);
    this.length = 3;
  }

  /**
   * @param {number} value
   */
  set setlength(value) {
    this.length = value;
  }

  /**
   * @param {string[]} value
   */
  set setshipslots(value) {
    this.shipslots = value.match(/.{1,2}/g);
  }
};

//A class to create the battleship objects by asking the player to input the
//starting slot, number of slots and orientation of the ship
module.exports = class BattleShip {
  constructor(shipSlots = 'a1a2a3') {
    this.shipSlots = shipSlots.match(/.{1,2}/g);
    this.length = 3;
  }

  /**
   * @param {number} value
   */
  set setLength(value) {
    this.length = value;
  }

  /**
   * @param {string[]} value
   */
  set setShipSlots(value) {
    this.shipSlots = value.match(/.{1,2}/g);
  }
};

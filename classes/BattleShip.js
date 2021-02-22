/*A class to create the battleship objects by getting the 
ship placement on the board as a string Ex:"a1a2a3" and convert it to
an array of slots of length of 2 characters Ex:["a1","a2","a3"] as a 
property of the class.The ship's length is set to 3 as default */
module.exports = class BattleShip {
  constructor(shipSlots = 'a1a2a3') {
    this.shipSlots = shipSlots.match(/.{1,2}/g);
    this.length = 3;
  }

  /**
   * setter to set the length of th ship outside of the class
   * @param {number} value
   */
  set setLength(value) {
    this.length = value;
  }

  /**
   * setter to set the shipSlots of th ship outside of the class
   * @param {string[]} value
   */
  set setShipSlots(value) {
    this.shipSlots = value.match(/.{1,2}/g);
  }
};

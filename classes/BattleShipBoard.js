//A class to create the game board by asking the player to giv the dimensions of the board
module.exports = class BattleShipBoard {
  constructor(width = 'h', height = 8) {
    this.width = width.toLowerCase();
    this.height = height;
  }

  /**
   * @param {string} value
   */
  set setWidth(value) {
    this.width = value;
  }

  /**
   * @param {number} value
   */
  set setHeight(value) {
    this.height = value;
  }

  //method to check if the given letter number combination is in the range of the board
  isShipInRange(shipSlots) {
    const arrayofSlots = shipSlots.match(/.{1,2}/g);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let state = true;
    for (let slot of arrayofSlots) {
      let lowerCaseWidth = slot[0].toLowerCase();
      let testWidthIndex = alphabet.indexOf(lowerCaseWidth);
      let widthIndex = alphabet.indexOf(this.width);
      let testHeight = slot[1];
      if (
        testHeight > this.height ||
        testWidthIndex > widthIndex ||
        testWidthIndex < 0
      ) {
        state = false;
        break;
      }
    }
    return state;
  }
};

//A class to create the game board by asking the player to give the dimensions of the board
module.exports = class BattleShipBoard {
  //Constructor to create a BattleShip object with default width of "h"
  //and with default height of 8
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
    //Get the shipSlots as a string Ex:"a1a2a3" and convert it to an array
    //of strings with length of 2 EX:["a1","a2","a3"]
    const arrayOfSlots = shipSlots.match(/.{1,2}/g);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let state = true;

    //Loop over every slot in the arrayOfSlots
    for (let slot of arrayOfSlots) {
      //Convert letter to lowercase to make the function case insensetive
      let lowerCaseWidth = slot[0].toLowerCase();

      //Get the index of the horizontal coordinate of slot in the alphabet sequence
      let testWidthIndex = alphabet.indexOf(lowerCaseWidth);

      //Get the index of Board width in alphabet sequence
      let widthIndex = alphabet.indexOf(this.width);

      //Get the vertical coordinate of the slot
      let testHeight = slot[1];

      //Check if the slot is in range of the board
      //if any of the slots are out of the board
      //break out of the loop and return false
      if (
        testHeight > this.height ||
        testHeight <= 0 ||
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

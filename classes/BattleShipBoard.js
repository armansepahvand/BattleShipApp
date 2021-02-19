//A class to create the game board by asking the player to giv the dimensions of the board
module.exports = class BattleShipBoard {
  constructor(width, height) {
    this.width = width.toLowerCase();
    this.height = height;
  }

  //method to check if the given letter number combination is in the range of the board
  isInRange(testWidth, testHeight) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseWidth = testWidth.toLowerCase();
    const testWidthIndex = alphabet.indexOf(lowerCaseWidth);
    const widthIndex = alphabet.indexOf(this.width);
    if (
      testHeight <= this.height &&
      testWidthIndex <= widthIndex &&
      testWidthIndex >= 0
    ) {
      return true;
    }
    return false;
  }
};

module.exports = class BattleShip {
  constructor(startSlot, numberOfSlots, orientation) {
    this.startSlot = startSlot;
    this.numberOfSlots = numberOfSlots;
    this.orientation = orientation.toLowerCase();
    this.sequenceOfSlots = this.sequence();
  }

  sequence() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letter = this.startSlot[0];
    const indexOfLetter = alphabet.indexOf(letter);
    const number = parseInt(this.startSlot[1]);
    let sequenceOfSlots = '';
    if (this.orientation === 'v') {
      for (let i = 0; i <= this.numberOfSlots - 1; i++) {
        let slot = `${letter}${number + i}`;
        sequenceOfSlots = sequenceOfSlots + slot;
      }
    } else {
      for (let i = 0; i <= this.numberOfSlots - 1; i++) {
        let slot = `${alphabet[indexOfLetter + i]}${number}`;
        sequenceOfSlots = sequenceOfSlots + slot;
      }
    }
    return sequenceOfSlots;
  }
};

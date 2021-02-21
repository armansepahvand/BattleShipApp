const BattleShipBoard = require('../classes/BattleShipBoard');
const battleShipBoard = new BattleShipBoard('e', 8);

test('Should pass for correct vertical ship in range ', () => {
  expect(battleShipBoard.isShipInRange('b2b3b4')).toBe(true);
});
test('Should pass for correct horizotal ship in range ', () => {
  expect(battleShipBoard.isShipInRange('a2b2c2')).toBe(true);
});
test('Should pass for incorrect height of ship in range  ', () => {
  expect(battleShipBoard.isShipInRange('b1b3b9')).toBe(false);
});
test('Should pass for incorrect width of ship in range  ', () => {
  expect(battleShipBoard.isShipInRange('z2b2c2')).toBe(false);
});

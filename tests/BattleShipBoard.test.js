const BattleShipBoard = require('../classes/BattleShipBoard');

test('check for the slots in the board ', () => {
  const battleShipBoard = new BattleShipBoard('e', 8);
  expect(battleShipBoard.isShipInRange('b2b3b4')).toBe(true);
  expect(battleShipBoard.isShipInRange('a2b2c2')).toBe(true);
  expect(battleShipBoard.isShipInRange('b1b3b9')).toBe(false);
  expect(battleShipBoard.isShipInRange('z2b2c2')).toBe(false);
});

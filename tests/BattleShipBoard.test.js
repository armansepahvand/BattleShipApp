const BattleShipBoard = require('../classes/BattleShipBoard');

test('check for the slots in the board ', () => {
  const battleShipBoard = new BattleShipBoard('e', 8);
  expect(battleShipBoard.isInRange('b', 2)).toBe(true);
  expect(battleShipBoard.isInRange('h', 1)).toBe(false);
  expect(battleShipBoard.isInRange('c', 9)).toBe(false);
  expect(battleShipBoard.isInRange('d', 8)).toBe(true);
  expect(battleShipBoard.isInRange('1', 8)).toBe(false);

});

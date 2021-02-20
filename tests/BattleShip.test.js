const BattleShip = require('../classes/BattleShip');
const BattleShipBoard = require('../classes/BattleShipBoard');

test('Battleship length should be 3 ', () => {
  const battleShip = new BattleShip('a1a2a3');
  expect(battleShip.length).toEqual(3);
});

test('Vertical battleship slots should match the input slots ', () => {
  const battleShip = new BattleShip('a1b1c1');
  expect(battleShip.length).toEqual(3);
});

test('Horizontal battleship slots should match the input slots ', () => {
  const battleShip = new BattleShip('a1a2a3');
  expect(battleShip.length).toEqual(3);
});

test('Horizontal battleship should be inside the board the board', () => {
  const battleShipHorizontal = new BattleShip('b3c3d3');
  expect(battleShipHorizontal.shipSlots).toEqual(['b3', 'c3', 'd3']);
});

test('Vertical battleship should be inside the board the board', () => {
  const battleShipHorizontal = new BattleShip('b3b4b5');
  expect(battleShipHorizontal.shipSlots).toEqual(['b3', 'b4', 'b5']);
});

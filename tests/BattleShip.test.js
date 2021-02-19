const BattleShip = require('../classes/BattleShip');

test('Vertical Ship blocks should be in sequence numerically ', () => {
  const battleShipVertical = new BattleShip('b3', 3, 'v');
  expect(battleShipVertical.sequenceOfSlots).toEqual('b3b4b5');
});

test('Ship blocks should be in sequence  alphabetically', () => {
  const battleShipHorizontal = new BattleShip('b3', 3, 'h');
  console.log(battleShipHorizontal.orientation);
  expect(battleShipHorizontal.sequenceOfSlots).toEqual('b3c3d3');
});

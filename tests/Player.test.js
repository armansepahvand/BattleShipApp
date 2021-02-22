const Player = require('../classes/Player');

test('Player default properties shuold  match the values ', () => {
  const player = new Player();

  expect(player.battleShip.length).toEqual(3);
  expect(player.battleShipBoard.width).toEqual('h');
});

test('Check the seters and getters of the Player Class', () => {
  let player = new Player();

  let playerShip = player.battleShip;
  let playerBoard = player.battleShipBoard;

  playerShip.setShipSlots = 'b2b3b4';
  playerBoard.setWidth = 'h';
  playerBoard.setHeight = 8;
  console.log(player);

  expect(player).toEqual({
    battleShip: { shipSlots: ['b2', 'b3', 'b4'], length: 3 },
    battleShipBoard: { width: 'h', height: 8 },
  });
});

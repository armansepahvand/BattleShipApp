const Player = require('../classes/Player');

test('Player default properties shuold  match the values ', () => {
  const player = new Player();
  expect(player.name).toEqual('');
  expect(player.battleShip.length).toEqual(3);
  expect(player.battleShipBoard.width).toEqual('h');
});

test('Check the seters and getters of the Player Class', () => {
  let player = new Player();
  player.setName = 'Arman';

  let playerShip = player.battleShip;
  let playerBoard = player.battleShipBoard;

  playerShip.setShipSlots = 'b2b3b4';
  playerBoard.setWidth = 'h';
  playerBoard.setHeight = 8;
  console.log(player);

  expect(player).toEqual({
    name: 'Arman',
    battleShip: { shipSlots: ['b2', 'b3', 'b4'], length: 3 },
    battleShipBoard: { width: 'h', height: 8 },
  });
});

test('Check the shots fired by player ', () => {
  let player = new Player();
  expect(player.fire('a2')).toEqual('a2');
  expect(player.fire('g5')).toEqual('g5');
});

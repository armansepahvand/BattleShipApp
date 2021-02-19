const BattleShip = require('../classes/BattleShip');

test('Ship blocks should be in sequence numerically or alphabetically', () => {
    const battleShipVertical= new BattleShip("b3",3,"v")
    const battleShipHorizontal= new BattleShip("b3",3,"h")
    expect(battleShipVertical.sequence).toEqual("b3b4b5");
    expect(battleShipHorizontal.sequence).toEqual("b3c3d3");
})

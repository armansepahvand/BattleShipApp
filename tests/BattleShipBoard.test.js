const BattleShipBoard = require('../classes/BattleShipBoard');



test('check if the slot exists in the board', () => {
    const battleShipBoard= new BattleShipBoard();
    expect(battleShipBoard.checkSlot("a1")).toBe(true)
    
})

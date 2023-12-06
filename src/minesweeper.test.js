const minesweeper = require('./minesweeper');

describe('User Story 1: Game created', () => {
  it('UAT1.1: When game start, then I should see "+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created"', () => {
    expect(minesweeper()).toBe('+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created');
  });
});

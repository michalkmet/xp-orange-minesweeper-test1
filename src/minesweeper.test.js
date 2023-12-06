const minesweeper = require('./minesweeper');

describe('User Story 1: Game created', () => {
  it('UAT1.1: When game start, then I should see "+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created"', () => {
    expect(minesweeper([])).toBe('+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created');
  });
});

describe('User Story 2: Step on the bomb', () => {
  it('UAT2.1: When player steps on bomb on the 0;0 square, then I should see "+-+-+-+\n|X| | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created"', () => {
    expect(minesweeper([0, 0])).toBe('+-+-+-+\n|X| | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.');
  });
  it('UAT2.2: When player steps on bomb on the square 0;1, then I should see "+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created"', () => {
    expect(minesweeper([0, 1])).toBe('+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.');
  });
  it('UAT2.3: When player steps on bomb on the square 1;1, then I should see "+-+-+-+\n| | | | \n+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created"', () => {
    expect(minesweeper([1, 1])).toBe('+-+-+-+\n| | | | \n+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.');
  });
});

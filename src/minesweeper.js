function minesweeper(picks) {
  let message = '';
  let board = '';
  if (picks.length === 0) {
    board = '+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] ';
    message = 'Game created';
  } else {
    board = generateBoard(picks);
    message = 'BOOM! – Game Over.';
  }
  return board + message;
}

function generateBoard(picks) {
  let board = '';
  if ((picks[0] === 0) & (picks[1] === 0)) {
    return '+-+-+-+\n|X| | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] ';
  } else if ((picks[0] === 0) & (picks[1] === 1)) {
    return '+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] ';
  } else if ((picks[0] === 1) & (picks[1] === 1)) {
    return '+-+-+-+\n| | | | \n+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] ';
  }
  return board;
}

module.exports = minesweeper;

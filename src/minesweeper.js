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
  console.log('picks: ', picks);
  let cells = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];
  let board = '';
  board += '+-+-+-+\n';
  for (let i = 0; i < 3; i++) {
    board += '|' + cells[0][i];
  }
  board += '|\n';
  board += '+-+-+-+\n';
  for (let i = 0; i < 3; i++) {
    board += '|' + cells[1][i];
  }
  board += '|\n';
  board += '+-+-+-+\n';
  for (let i = 0; i < 3; i++) {
    board += '|' + cells[2][i];
  }
  board += '|\n';
  board += '+-+-+-+\n';
  // if ((picks[0] === 0) & (picks[1] === 0)) {
  //   return '+-+-+-+\n|X| | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] ';
  // } else if ((picks[0] === 0) & (picks[1] === 1)) {
  //   return '+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] ';
  // } else if ((picks[0] === 1) & (picks[1] === 1)) {
  //   return '+-+-+-+\n| | | | \n+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] ';
  // }
  return board;
}

module.exports = minesweeper;

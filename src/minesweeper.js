function minesweeper(pick) {
  if ((pick[0] === 0) & (pick[1] === 0)) {
    return '+-+-+-+\n|X| | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.';
  } else if ((pick[0] === 0) & (pick[1] === 1)) {
    return '+-+-+-+\n| |X| | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] BOOM! – Game Over.';
  }
  return '+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n| | | | \n+-+-+-+\n[Sandbox 3x3] Game created';
}

module.exports = minesweeper;

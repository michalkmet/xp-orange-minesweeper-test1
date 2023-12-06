## Backlog

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

User Story 1: Game created
As a user, I want to see empty board and Game created message

- ⚠ TODO UAT1.1: When game start, then I should see '+-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  [Sandbox 3x3] Game created'

User Story 2: Step on the bomb
As a user, I want to see X when player steps on the square with the bomb and game over message

- ⚠ TODO UAT2.1: When player steps on bomb on the 0;0 square, then I should see '+-+-+-+
  |X| | |
  +-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  [Sandbox 3x3] BOOM! – Game Over.'

- ⚠ TODO UAT2.2: When player steps on bomb on the square 0;1, then I should see '+-+-+-+
  | |X| |
  +-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  [Sandbox 3x3] BOOM! – Game Over.'

- ⚠ TODO UAT2.3: When player steps on bomb on the square 1;1, then I should see '+-+-+-+
  | | | |
  +-+-+-+
  | |X| |
  +-+-+-+
  | | | |
  +-+-+-+
  [Sandbox 3x3] BOOM! – Game Over.'

- ⚠ TODO UAT2.4: When player steps on bomb on the square 2;2, then I should see '+-+-+-+
  | | | |
  +-+-+-+
  | | | |
  +-+-+-+
  | | |X|
  +-+-+-+
  [Sandbox 3x3] BOOM! – Game Over.'

User Story 3: Flag the square
As a user, I want to see \* when player flagged the square

- ⚠ TODO UAT3.1: When player flagged the squares 1;0,1;1,2;1, then I should see '+-+-+-+
  | | | |
  +-+-+-+
  |_|_| |
  +-+-+-+
  |3|\*| |
  +-+-+-+
  [Sandbox 3x3] Square flagged as bomb.'

User Story 4: Game Victory
As a user, I want to see victory message after player cleared all squares without bomb

- ⚠ TODO UAT4.1: When player clicked on squares[2;0 + 2;2], then I should see '+-+-+-+
  |2|2|1|
  +-+-+-+
  |_|_|2|
  +-+-+-+
  |3|\*|2|
  +-+-+-+
  [Sandbox 3x3] the land is cleared! GOOD JOB!'

export const INITIAL_ROWS = 3;
export const INITIAL_COLUMNS = 3;
export const INITIAL_MOVES = 10;
export const INITIAL_COUNTDOWN = 2000;

export const getRandomInt = (minInt, maxInt) => {
  const min = Math.ceil(minInt);
  const max = Math.floor(maxInt);
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomizeDirection = () => {
  const directions = ['up', 'right', 'down', 'left'];
  return directions[Math.floor(Math.random() * directions.length)];
};

export const HARD_LEVEL = {
  moves: 15,
  rows: 12,
  columns: 12,
};

export const EASY_LEVEL = {
  moves: 10,
  rows: 9,
  columns: 9,
};

export const MEDIUM_LEVEL = {
  moves: 15,
  rows: 9,
  columns: 9,
};

export const getTilesNumber = (rows, columns) => rows * columns;

export const getMoveHistoryAndfinishPosition = ({
  startPosition,
  rows,
  columns,
  tiles,
  moves,
}) => {
  let finishPosition = startPosition;
  let countLimit = moves;
  const moveHistory = [];
  for (let i = 1; i <= countLimit; i++) {
    const move = randomizeDirection();
    switch (move) {
      case 'up':
        if (finishPosition > rows) {
          moveHistory.push(move);
          finishPosition -= rows;
        } else {
          countLimit++;
        }
        break;
      case 'down':
        if (finishPosition <= tiles - rows) {
          moveHistory.push(move);
          finishPosition += rows;
        } else {
          countLimit++;
        }
        break;
      case 'right':
        if (finishPosition % columns !== 0) {
          moveHistory.push(move);
          finishPosition += 1;
        } else {
          countLimit++;
        }
        break;
      case 'left':
        if (finishPosition % columns !== 1) {
          moveHistory.push(move);
          finishPosition -= 1;
        } else {
          countLimit++;
        }
        break;
    }
  }
  return { moveHistory, finishPosition };
};

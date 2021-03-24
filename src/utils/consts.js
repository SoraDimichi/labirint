export const INITIAL_ROWS = 3;
export const INITIAL_COLUMNS = 3;
export const INITIAL_MOVES = 10;
export const INITIAL_TILES = INITIAL_MOVES * INITIAL_COLUMNS;
// const TIME_BREAK = 2000;

export const getRandomInt = (minInt, maxInt) => {
  const min = Math.ceil(minInt);
  const max = Math.floor(maxInt);
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomizeDirection = () => {
  const directions = ['up', 'right', 'down', 'left'];
  return directions[Math.floor(Math.random() * directions.length)];
};

export const getTilesNumber = (rows, columns) => rows * columns;

export const getMoveHistoryAndFinalPosition = (
  startPosition,
  rowsNumber,
  columnsNumber,
  numberOfTiles,
  numberOfMoves,
) => {
  let currentPosition = startPosition;
  let countLimit = numberOfMoves;
  const currentMoveHistory = [];
  for (let i = 1; i <= countLimit; i++) {
    const move = randomizeDirection();
    switch (move) {
      case 'up':
        if (currentPosition > rowsNumber) {
          currentMoveHistory.push(move);
          currentPosition -= rowsNumber;
        } else {
          countLimit++;
        }
        break;
      case 'down':
        if (currentPosition <= numberOfTiles - rowsNumber) {
          currentMoveHistory.push(move);
          currentPosition += rowsNumber;
        } else {
          countLimit++;
        }
        break;
      case 'right':
        if (currentPosition % columnsNumber !== 0) {
          currentMoveHistory.push(move);
          currentPosition += 1;
        } else {
          countLimit++;
        }
        break;
      case 'left':
        if (currentPosition % columnsNumber !== 1) {
          currentMoveHistory.push(move);
          currentPosition -= 1;
        } else {
          countLimit++;
        }
        break;
    }
  }
  return { currentMoveHistory, currentPosition };
};

import {
  PLAYER_TURN, SET_GAME_STATE, SET_PATH_SHOWED, TOGGLE_POPUP,
} from '../types';
import {
  getMoveHistoryAndFinalPosition,
  getRandomInt,
} from '../../utils/consts';

export const startGame = ({
  numberOfMoves,
  countDown = 2000,
  rows,
  columns,
}) => {
  const numberOfTiles = rows * columns;
  const startPosition = getRandomInt(1, numberOfTiles);
  const { currentMoveHistory, currentPosition } = getMoveHistoryAndFinalPosition(
    startPosition,
    rows,
    columns,
    numberOfTiles,
    numberOfMoves,
  );
  return {
    type: SET_GAME_STATE,
    payload: {
      currentMoveHistory,
      currentPosition,
      countDown,
      tiles: numberOfTiles,
      startPosition,
    },
  };
};

export const togglePopup = () => ({
  type: TOGGLE_POPUP,
});

export const playerTurn = (selectedPosition) => ({
  type: PLAYER_TURN,
  selectedPosition,
});

export const playerPathShowed = (pathShowedState) => ({
  type: SET_PATH_SHOWED,
  pathShowedState,
});

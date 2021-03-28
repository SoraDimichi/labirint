import {
  getMoveHistoryAndFinishPosition,
  getRandomInt,
} from '../../utils/consts';

import {
  SET_GAME_STATE,
  TOGGLE_POPUP,
  TOGGLE_CLICKABLE,
  SET_GAME_STATUS,
} from '../types';

export const setGameStatus = (currentGameStatus) => {
  const gameStatus = currentGameStatus;
  return {
    type: SET_GAME_STATUS,
    payload: {
      gameStatus,
    },
  };
};

export const startGame = ({
  moves,
  countDown,
  rows,
  columns,
}) => {
  const tiles = rows * columns;
  const startPosition = getRandomInt(1, tiles);
  const {
    moveHistory,
    finishPosition,
  } = getMoveHistoryAndFinishPosition({
    startPosition,
    rows,
    columns,
    tiles,
    moves,
  });
  return {
    type: SET_GAME_STATE,
    payload: {
      moveHistory,
      finishPosition,
      countDown,
      tiles,
      startPosition,
    },
  };
};

export const togglePopup = () => ({
  type: TOGGLE_POPUP,
});

export const toggleClickable = () => ({
  type: TOGGLE_CLICKABLE,
});
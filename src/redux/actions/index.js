import {
  getMoveHistoryAndfinishPosition,
  getRandomInt,
} from '../../utils/consts';

import {
  PLAYER_TURN,
  SET_GAME_STATE,
  SET_PATH_SHOWED,
  TOGGLE_POPUP,
  SET_COUNT_FOR_ARROWS,
} from '../types';

export const startGame = ({
  moves,
  countDown,
  rows,
  columns,
}) => {
  const tiles = rows * columns;
  const startPosition = getRandomInt(1, tiles);
  const { moveHistory, finishPosition } = getMoveHistoryAndfinishPosition({
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

export function setCountForArrows(moveHistory, countDown) {
  return async (dispatch) => {
    let counter = 0;
    setTimeout(() => {
      counter++;
    }, countDown);
    dispatch({
      type: SET_COUNT_FOR_ARROWS,
      payload: {
        moveHistory,
        countDown,
        counter,
      },
    });
  };
}

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

import {
  SET_GAME_STATE,
  SET_GAME_STATUS,
} from '../types';

import {
  INITIAL_MOVES,
  INITIAL_ROWS,
  INITIAL_COLUMNS,
  INITIAL_COUNTDOWN,
  GAME_STATUS,
} from '../../utils/consts';

const INITIAL_STATE = {
  moveHistory: [], // ['left', 'up']
  moves: INITIAL_MOVES,
  rows: INITIAL_ROWS,
  columns: INITIAL_COLUMNS,
  countDown: INITIAL_COUNTDOWN,
  tiles: 0,
  selectedPosition: null,
  finishPosition: null,
  startPosition: null,
  gameStatus: GAME_STATUS.started,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAME_STATE: {
      const {
        payload: {
          moveHistory,
          startPosition,
          finishPosition,
          tiles,
        },
      } = action;
      return {
        ...state,
        moveHistory,
        startPosition,
        finishPosition,
        tiles,
      };
    }

    case SET_GAME_STATUS: {
      const {
        payload: {
          selectedPosition,
        },
      } = action;
      let currentGameStatus;
      if (selectedPosition === null) {
        currentGameStatus = GAME_STATUS.started;
      } else if (selectedPosition === state.finishPosition) {
        currentGameStatus = GAME_STATUS.win;
      } else {
        currentGameStatus = GAME_STATUS.lose;
      }
      return {
        ...state,
        gameStatus: currentGameStatus,
        selectedPosition,
      };
    }

    default:
      return state;
  }
};

export default gameReducer;

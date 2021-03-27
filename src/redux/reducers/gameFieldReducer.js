import {
  PLAYER_TURN,
  SET_GAME_STATE,
  SET_GAME_STATUS,
  TOGGLE_POPUP,
  SET_COUNT_FOR_ARROWS,
} from '../types';

import {
  INITIAL_MOVES,
  INITIAL_ROWS,
  INITIAL_COLUMNS,
  INITIAL_COUNTDOWN,
} from '../../utils/consts';

const PATH_SHOWED_STATES = {
  inProgress: 'inProgress',
  done: 'done',
  notStarted: 'notStarted',
};

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
  pathShowedState: PATH_SHOWED_STATES.notStarted,
  popupOpened: false,
  gameStatus: '',
};

const gameFieldReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAME_STATE: {
      const {
        payload: {
          moveHistory,
          startPosition,
          finishPosition,
          tiles,
          moves,
        },
      } = action;
      return {
        ...state,
        moveHistory,
        startPosition,
        finishPosition,
        tiles,
        moves,
      };
    }

    case SET_GAME_STATUS: {
      const {
        payload: {
          gameStatus,
        },
      } = action;
      return {
        ...state,
        gameStatus,
      };
    }

    case SET_COUNT_FOR_ARROWS: {
      const {
        payload: {
          moveHistory,
          countDown,
          counter,
        },
      } = action;
      return {
        ...state,
        counter,
        moveHistory,
        countDown,
      };
    }

    case PLAYER_TURN: {
      const {
        payload: {
          selectedPosition,
        },
      } = action;
      return {
        ...state,
        selectedPosition,
      };
    }

    case TOGGLE_POPUP: {
      return {
        ...state,
        popupOpened: !state.popupOpened,
      };
    }

    default:
      return state;
  }
};

export default gameFieldReducer;

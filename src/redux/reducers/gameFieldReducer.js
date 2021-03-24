import {
  PLAYER_TURN, SET_GAME_STATE, SET_PATH_SHOWED, TOGGLE_POPUP,
} from '../types';
import { INITIAL_MOVES } from '../../utils/consts';

const PATH_SHOWED_STATES = {
  inProgress: 'inProgress',
  done: 'done',
  notStarted: 'notStarted',
};

const INITIAL_STATE = {
  currentMoveHistory: [], // ['left', 'up']
  selectedPosition: null,
  currentPosition: null,
  startPosition: null,
  pathShowedState: PATH_SHOWED_STATES.notStarted,
  popupOpened: false,
  countDown: 20,
  tiles: 0,
  moves: INITIAL_MOVES,
};

const gameFieldReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAME_STATE: {
      const {
        payload: {
          currentMoveHistory,
          currentPosition,
          startPosition,
          countDown,
          tiles,
        },
      } = action;
      return {
        ...state,
        ...INITIAL_STATE,
        currentMoveHistory,
        currentPosition,
        startPosition,
        countDown,
        tiles,
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
    case SET_PATH_SHOWED: {
      const {
        payload: {
          pathShowedState,
        },
      } = action;
      return {
        ...state,
        pathShowedState,
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

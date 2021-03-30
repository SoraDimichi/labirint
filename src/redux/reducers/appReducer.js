import { TOGGLE_POPUP, TOGGLE_CLICKABLE } from '../types';

const INITIAL_STATE = {
  isClickable: false,
  popupOpened: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_POPUP: {
      return {
        ...state,
        popupOpened: !state.popupOpened,
      };
    }

    case TOGGLE_CLICKABLE: {
      return {
        ...state,
        isClickable: !state.isClickable,
      };
    }

    default:
      return state;
  }
};

export default appReducer;

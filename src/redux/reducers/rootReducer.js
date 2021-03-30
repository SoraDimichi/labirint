import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  app: appReducer,
});

export default rootReducer;

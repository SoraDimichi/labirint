import { createStore } from 'redux';
import gameFieldReducer from './reducers/gameFieldReducer';

const store = createStore(gameFieldReducer);

export default store;

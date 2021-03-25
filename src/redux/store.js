import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import gameFieldReducer from './reducers/gameFieldReducer';

const store = createStore(gameFieldReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

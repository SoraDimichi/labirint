import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Tiles from './Tiles/Tiles';
import Arrows from './Arrows/Arrows';
import Popup from './Popup/Popup';
import {
  INITIAL_ROWS,
  INITIAL_COLUMNS,
  INITIAL_MOVES,
  INITIAL_COUNTDOWN,
} from '../utils/consts';
import { startGame } from '../redux/actions';

const App = () => {
  const {
    isClickable,
    gameStatus,
  } = useSelector((
    state,
  ) => ({
    gameStatus: state.gameStatus,
    isClickable: state.isClickable,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGame({
      moves: INITIAL_MOVES,
      countDown: INITIAL_COUNTDOWN,
      rows: INITIAL_ROWS,
      columns: INITIAL_COLUMNS,
    }));
  }, []);

  return (
    <main className="App">
      <h1 className="App__title">
        Лабиринт
      </h1>
      <p className="App__subtitle">
        {isClickable ? 'Пришло время кликать'
          : (gameStatus !== '' ? 'Игра закончена' : 'Двигайся мысленно по стрелочкам.')}
      </p>
      <Tiles />
      <Arrows />
      <Popup />
    </main>
  );
};
export default App;

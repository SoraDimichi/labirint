import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Tiles from './Tiles/Tiles';
import Arrows from './Arrows/Arrows';
import Popup from './Popup/Popup';
import {
  INITIAL_ROWS,
  INITIAL_COLUMNS,
  INITIAL_MOVES,
} from '../utils/consts';
import { startGame } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGame({
      numberOfMoves: INITIAL_MOVES,
      countDown: 2000,
      rows: INITIAL_ROWS,
      columns: INITIAL_COLUMNS,
    }));
  }, []);

  return (
    <main className="App">
      <h1 className="App__title">Лабиринт</h1>
      <p className="App__subtitle">Двигайся в лабиринте по стрелочкам.</p>
      <Tiles />
      <Arrows />
      <Popup />
    </main>
  );
};
export default App;

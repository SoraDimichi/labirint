import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Popup.css';
import { startGame } from '../../redux/actions';

const Popup = React.memo(() => {
  const { popupOpened } = useSelector((
    state,
  ) => ({ popupOpened: state.popupOpened }));
  const dispatch = useDispatch();
  const handleDifficultyAndClose = (rows, columns, moves) => {
    dispatch(startGame({
      numberOfMoves: moves,
      rows,
      columns,
    }));
  };

  return (
    <div className={`Popup ${popupOpened ? 'Popup_opened' : ''}`}>
      <h1 className="Popup__title">Поздравляем с победой!</h1>
      <p className="Popup__subtitle">Попробуйте снова:</p>
      <ul className="Popup__restart-menu">
        <ul className="Popup__restart-menu">
          <li className="Popup__restart-menu-item">
            <button
              type="button"
              className="Popup__restart-menu-button"
              onClick={() => handleDifficultyAndClose(9, 9, 10)}
            >
              Легкий уровень
            </button>
          </li>
          <li className="Popup__restart-menu-item">
            <button
              type="button"
              className="Popup__restart-menu-button"
              onClick={() => handleDifficultyAndClose(9, 9, 15)}
            >
              Средний уровень
            </button>
          </li>
          <li className="Popup__restart-menu-item">
            <button
              type="button"
              className="Popup__restart-menu-button"
              onClick={() => handleDifficultyAndClose(12, 12, 15)}
            >
              Сложный уровень
            </button>
          </li>
        </ul>
      </ul>
    </div>
  );
});

export default Popup;

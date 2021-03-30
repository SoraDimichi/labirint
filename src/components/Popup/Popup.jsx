import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Popup.css';
import {
  startGame,
  togglePopup,
  setGameStatus,
} from '../../redux/actions';
import { HARD_LEVEL, MEDIUM_LEVEL, EASY_LEVEL } from '../../utils/consts';

const Popup = memo(() => {
  const dispatch = useDispatch();
  const popupOpened = useSelector((state) => state.app.popupOpened);
  const gameStatus = useSelector((state) => state.game.gameStatus);

  const handleDifficultyAndClose = ({ rows, columns, moves }) => {
    dispatch(startGame({
      moves,
      rows,
      columns,
    }));
    dispatch(setGameStatus(null));
    dispatch(togglePopup());
  };

  return (
    <div className={`Popup ${popupOpened ? 'Popup_opened' : ''}`}>
      <h1 className="Popup__title">{gameStatus === 'win' ? 'Победа!' : 'Поражение'}</h1>
      <p className="Popup__subtitle">Попробуйте еще раз:</p>
      <ul className="Popup__restart-menu">
        <li className="Popup__restart-menu-item">
          <button
            type="button"
            className="Popup__restart-menu-button focus-effect"
            onClick={() => handleDifficultyAndClose(EASY_LEVEL)}
          >
            Легко
          </button>
        </li>
        <li className="Popup__restart-menu-item">
          <button
            type="button"
            className="Popup__restart-menu-button focus-effect"
            onClick={() => handleDifficultyAndClose(MEDIUM_LEVEL)}
          >
            Средне
          </button>
        </li>
        <li className="Popup__restart-menu-item">
          <button
            type="button"
            className="Popup__restart-menu-button focus-effect"
            onClick={() => handleDifficultyAndClose(HARD_LEVEL)}
          >
            Сложно
          </button>
        </li>
      </ul>
    </div>
  );
});

export default Popup;

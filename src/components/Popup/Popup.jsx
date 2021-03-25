import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Popup.css';
import { startGame, togglePopup } from '../../redux/actions';
import { HARD_LEVEL, MEDIUM_LEVEL, EASY_LEVEL } from '../../utils/consts';

const Popup = React.memo(() => {
  const { popupOpened } = useSelector((
    state,
  ) => ({ popupOpened: state.popupOpened }));
  const dispatch = useDispatch();
  const handleDifficultyAndClose = ({ rows, columns, moves }) => {
    dispatch(startGame({
      moves,
      rows,
      columns,
    }));
    dispatch(togglePopup());
  };

  return (
    <div className={`Popup ${popupOpened ? 'Popup_opened' : ''}`}>
      <h1 className="Popup__title">Победа!</h1>
      <p className="Popup__subtitle">Попробуйте еще раз:</p>
      <ul className="Popup__restart-menu">
        <li className="Popup__restart-menu-item">
          <button
            type="button"
            className="Popup__restart-menu-button"
            onClick={() => handleDifficultyAndClose(EASY_LEVEL)}
          >
            Легко
          </button>
        </li>
        <li className="Popup__restart-menu-item">
          <button
            type="button"
            className="Popup__restart-menu-button"
            onClick={() => handleDifficultyAndClose(MEDIUM_LEVEL)}
          >
            Средне
          </button>
        </li>
        <li className="Popup__restart-menu-item">
          <button
            type="button"
            className="Popup__restart-menu-button"
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

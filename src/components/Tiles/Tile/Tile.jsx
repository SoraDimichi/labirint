import React from 'react';
import './Tile.css';
import { useDispatch, useSelector } from 'react-redux';
import like from '../../../images/like.svg';
import dislike from '../../../images/dislike.svg';
import { GAME_STATUS } from '../../../utils/consts';
import {
  togglePopup,
  toggleClickable,
  setGameStatus,
} from '../../../redux/actions';

const Tile = ({ position }) => {
  const {
    startPosition,
    finishPosition,
    selectedPosition,
    gameStatus,
  } = useSelector((
    state,
  ) => ({
    startPosition: state.startPosition,
    finishPosition: state.finishPosition,
    selectedPosition: state.selectedPosition,
    gameStatus: state.gameStatus,
  }));

  const dispatch = useDispatch();

  const handleTileClick = (pos) => {
    dispatch(toggleClickable());
    dispatch(setGameStatus(pos));
    setTimeout(() => dispatch(togglePopup()), 2000);
  };

  return (
    <li className="Tile">
      <button
        type="button"
        className="Tile__button focus-effect"
        onClick={() => handleTileClick(position)}
      >
        <p
          className={`Tile__text
          ${position === startPosition && position !== selectedPosition
            ? (position === finishPosition && gameStatus !== GAME_STATUS.started
              ? '' : 'Tile__text_start_vis')
            : ''}`}
        >
          Старт
        </p>
        <p
          className={`Tile__text
          ${position === finishPosition && gameStatus === GAME_STATUS.lose
            ? 'Tile__text_finish_vis' : ''}`}
        >
          Финиш
        </p>
        <img
          className={`Tile__image
          ${position !== finishPosition && position === selectedPosition
          && gameStatus === GAME_STATUS.lose ? 'Tile__image_lose_vis' : ''}`}
          src={dislike}
          alt="поражение"
        />
        <img
          className={`Tile__image
          ${position === finishPosition && position === selectedPosition
          && gameStatus === GAME_STATUS.win ? 'Tile__image_win_vis' : ''}`}
          src={like}
          alt="победа"
        />
      </button>
    </li>
  );
};

export default Tile;

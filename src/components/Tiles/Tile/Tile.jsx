import React, { useState, useEffect } from 'react';
import './Tile.css';
import { useDispatch, useSelector } from 'react-redux';
import like from '../../../images/like.svg';
import dislike from '../../../images/dislike.svg';
import {
  togglePopup,
  setGameStatus,
  toggleClickable,
} from '../../../redux/actions';

const Tile = ({ position }) => {
  const { startPosition, finishPosition, gameStatus } = useSelector((
    state,
  ) => ({
    startPosition: state.startPosition,
    finishPosition: state.finishPosition,
    gameStatus: state.gameStatus,
  }));

  const dispatch = useDispatch();
  const [tileResult, setTileResult] = useState('');

  const handleTileClick = (pos) => {
    dispatch(toggleClickable());
    pos === finishPosition ? setTileResult('win') : setTileResult('lose');
    setTimeout(() => dispatch(togglePopup()), 2000);
  };

  useEffect(() => {
    if (tileResult !== '') {
      dispatch(setGameStatus(tileResult));
    }
  }, [tileResult]);

  useEffect(() => {
    if (gameStatus === '') {
      setTileResult('');
    }
  }, [gameStatus]);

  return (
    <li className="Tile">
      <button
        type="button"
        className="Tile__button focus-effect"
        onClick={() => handleTileClick(position)}
      >
        <p
          className={`Tile__text
          ${position === startPosition
          && tileResult === ''
            ? (position === finishPosition && gameStatus === 'lose'
              ? '' : 'Tile__text_start_vis')
            : ''}`}
        >
          Старт
        </p>
        <p
          className={`Tile__text
          ${position === finishPosition && gameStatus === 'lose' ? 'Tile__text_finish_vis' : ''}`}
        >
          Финиш
        </p>
        <img
          className={`Tile__image
          ${position !== finishPosition && tileResult === 'lose' ? 'Tile__image_lose_vis' : ''}`}
          src={dislike}
          alt="поражение"
        />
        <img
          className={`Tile__image
          ${position === finishPosition && tileResult === 'win' ? 'Tile__image_win_vis' : ''}`}
          src={like}
          alt="победа"
        />
      </button>
    </li>
  );
};

export default Tile;

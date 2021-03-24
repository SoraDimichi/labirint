import React, { useState } from 'react';
import './Tile.css';
import { useSelector } from 'react-redux';
import like from '../../../images/like.svg';
import dislike from '../../../images/dislike.svg';
// import like from '../../../images/like.svg';

const Tile = ({ position }) => {
  const { startPosition, finishPosition } = useSelector((
    state,
  ) => ({ startPosition: state.startPosition, finishPosition: state.currentPosition }));

  const [result, setResult] = useState('');

  const handleTileClick = (pos) => {
    pos === finishPosition ? setResult('win') : setResult('lose');
    console.log(pos);
  };

  return (
    <li className="Tile">
      <button type="button" className="Tile__button" onClick={() => handleTileClick(position)}>
        <p
          className={`Tile__text
           ${position === startPosition ? 'Tile__text_win_vis' : ''}`}
        >
          Старт
        </p>
        <p
          className={`Tile__text
          ${position === finishPosition && result === 'lose' ? 'Tile__text_finish_vis' : ''}`}
        >
          Финиш
        </p>
        <img
          className={`Tile__image
          ${position !== finishPosition && result === 'lose' ? 'Tile__image_lose_vis' : ''}`}
          src={dislike}
          alt="поражение"
        />
        <img
          className={`Tile__image
          ${position === finishPosition && result === 'win' ? 'Tile__image_win_vis' : ''}`}
          src={like}
          alt="победа"
        />
      </button>
    </li>
  );
};

export default Tile;

// <img src={like} className="Tile__image" alt="победа" />
// {finishPosition === position ? 'finish' : ''}
// {position}

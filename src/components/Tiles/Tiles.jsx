import React from 'react';
import './Tiles.css';
import { useSelector } from 'react-redux';
import Tile from './Tile/Tile';

const Tiles = () => {
  const {
    tiles,
    isClickable,
  } = useSelector((
    state,
  ) => ({
    tiles: state.tiles,
    isClickable: state.isClickable,
  }));

  const tilesData = Array(tiles).fill().map((_item, index) => index + 1);

  return (
    <ul
      className={`Tiles${tiles === 16 ? ' Tiles_hard' : ''}${isClickable ? '' : ' Tiles_blocked'}`}
    >
      {tilesData.map((position) => (
        <Tile key={position} position={position} />
      ))}
    </ul>
  );
};

export default Tiles;

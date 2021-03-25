import React from 'react';
import './Tiles.css';
import { useSelector } from 'react-redux';
import Tile from './Tile/Tile';

const Tiles = () => {
  const { tiles } = useSelector((
    state,
  ) => ({ tiles: state.tiles }));

  const tilesData = Array(tiles).fill().map((_item, index) => index + 1);

  return (
    <ul className={`Tiles${tiles === 16 ? ' Tiles_hard' : ''}`}>
      {tilesData.map((position) => (
        <Tile key={position} position={position} />
      ))}
    </ul>
  );
};

export default Tiles;

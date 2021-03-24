import React from 'react';
import './Tiles.css';
import { useSelector } from 'react-redux';
import Tile from './Tile/Tile';

const Tiles = () => {
  const { tiles } = useSelector((
    state,
  ) => ({ tiles: state.tiles }));
  console.log('tiles', tiles);
  const tilesData = React.useMemo(
    () => Array(tiles).fill().map((_item, index) => index + 1),
    [tiles],
  );

  return (
    <ul className="Tiles">
      {tilesData.map((position) => (
        <Tile key={position} position={position} />
      ))}
    </ul>
  );
};

export default Tiles;

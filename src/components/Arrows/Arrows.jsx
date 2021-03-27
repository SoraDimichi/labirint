import React, { useEffect, useState } from 'react';
import './Arrows.css';
import { useSelector } from 'react-redux';
import Arrow from './Arrow/Arrow';

const Arrows = () => {
  const {
    countDown,
    moveHistory,
    gameStatus,
  } = useSelector((
    state,
  ) => ({
    countDown: state.countDown,
    moveHistory: state.moveHistory,
    gameStatus: state.gameStatus,
  }));

  const [arrows, setArrows] = useState([]);

  useEffect(() => {
    if (gameStatus === '') {
      setArrows([]);
    }
  }, [gameStatus]);

  useEffect(() => {
    if (arrows.length < moveHistory.length) {
      setTimeout(() => {
        const arrowElement = (<Arrow direction={moveHistory[arrows.length]} key={arrows.length} />);
        setArrows([...arrows, arrowElement]);
        console.log(arrows.length);
      }, countDown);
    }
  }, [arrows]);

  return (
    <ul className="Arrows">
      {console.log(arrows)}
      {arrows}
    </ul>
  );
};

export default Arrows;

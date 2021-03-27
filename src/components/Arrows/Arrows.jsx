import React, { useEffect, useState } from 'react';
import './Arrows.css';
import { useSelector, useDispatch } from 'react-redux';
import Arrow from './Arrow/Arrow';
import {
  toggleClickable,
} from '../../redux/actions';

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
  const dispatch = useDispatch();

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
        if (arrows.length === moveHistory.length - 1) {
          console.log(arrows);
          console.log(moveHistory);
          dispatch(toggleClickable());
        }
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

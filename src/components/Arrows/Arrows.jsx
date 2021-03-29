import React, { useEffect, useState } from 'react';
import './Arrows.css';
import { useSelector, useDispatch } from 'react-redux';
import Arrow from './Arrow/Arrow';
import { GAME_STATUS } from '../../utils/consts';
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
    if (gameStatus === GAME_STATUS.started) {
      setArrows([]);
    }
  }, [gameStatus]);

  useEffect(() => {
    if (arrows.length < moveHistory.length) {
      setTimeout(() => {
        const arrowElement = (<Arrow direction={moveHistory[arrows.length]} key={arrows.length} />);
        setArrows([...arrows, arrowElement]);
        if (arrows.length === moveHistory.length - 1) {
          dispatch(toggleClickable());
        }
      }, countDown);
    }
  }, [arrows]);

  return (
    <ul className="Arrows">
      {arrows}
    </ul>
  );
};

export default Arrows;

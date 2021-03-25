import React, { useEffect, useState } from 'react';
import './Arrows.css';
import { useSelector } from 'react-redux';
import Arrow from './Arrow/Arrow';

const Arrows = () => {
  const { countDown, moves, moveHistory } = useSelector((
    state,
  ) => ({ countDown: state.countDown, moves: state.moves, moveHistory: state.moveHistory }));
  const [showedState, setShowedState] = useState(0);
  const [arrows, setArrows] = useState([]);

  useEffect(() => {
    if (showedState < moves) {
      setTimeout(() => {
        const ArrayOfArrows = [...moveHistory];
        const arrowElement = (<Arrow direction={ArrayOfArrows[showedState]} key={showedState} />);
        setArrows([...arrows, arrowElement]);
        setShowedState((current) => current + 1);
      }, countDown);
    }
  }, [showedState, moves]);

  return (
    <ul className="Arrows">
      {arrows}
    </ul>
  );
};

export default Arrows;

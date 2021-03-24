import React, { useEffect, useState } from 'react';
import './Arrows.css';
import { useSelector } from 'react-redux';
// import Arrow from './Arrow/Arrow';

const Arrows = React.memo(() => {
  const { countDown, moves } = useSelector((
    state,
  ) => ({ countDown: state.countDown, moves: state.moves }));
  const [showedState, setShowedState] = useState(0);
  console.log('moves', moves);
  useEffect(() => {
    if (showedState < moves) {
      setTimeout(() => {
        setShowedState((current) => current + 1);
      }, countDown);
    }
  }, [showedState, moves]);

  return (
    <ul className="Arrows" />
  );
});

export default Arrows;

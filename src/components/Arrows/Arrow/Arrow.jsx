import React from 'react';
import arrow from '../../../images/arrow.svg';
import arrowGreen from '../../../images/arrow-green.svg';

const Arrow = () => (
  <li className="Arrow">
    <img src={arrow || arrowGreen} className="Arrow__image" alt="поражение" />
  </li>
);

export default Arrow;

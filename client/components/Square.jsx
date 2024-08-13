
import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function Square({ value, reset }) {

  const colorObj = {
    red: '#f17f7f',
    green: '#9cec9c',
    white: '#d4cfcf',
    yellow: '#e9ba3a',
  };

  const currentColor = useSelector((state) => state.game.currentColor);
 const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    if (reset) {
      setBackgroundColor(colorObj.white);
    }
  }, [reset]);


  function handleClick() {
    setBackgroundColor(colorObj[currentColor]);
  }

  return (
    <div
      onClick={handleClick}
      className='square'
      style={{ backgroundColor }}
    >
      {value}
    </div>
  );
}


import React from 'react';
import Reset from '../Reset.jsx';

export default function ResetBoard() {
  
  const guessRows = [];
  for (let i = 0; i < 8; i++) {
    guessRows.push(<Reset resetRowId = {i}/>);
  }

  return <div className="resetRows">{guessRows}</div>;
}

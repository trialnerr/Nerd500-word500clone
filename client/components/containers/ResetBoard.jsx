import React from 'react';
import Reset from '../Reset.jsx';

//update this by giving keys to each Reset component
export default function ResetBoard() {
  
  const guessRows = [];
  for (let i = 0; i < 8; i++) {
    guessRows.push(<Reset resetRowId = {i} key = {crypto.randomUUID()}/>);
  }

  return <div className="resetRows">{guessRows}</div>;
}

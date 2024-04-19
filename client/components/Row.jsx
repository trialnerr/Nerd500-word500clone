import React from 'react';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Row({ length, rowId }) {
  let backgroundColor;

  const currentWord = useSelector((state) => state.game.currentWord);
  const currentRow = useSelector((state) => state.game.currentRow);
  const previousWords = useSelector((state) => state.game.previousWords);
  const resetRow = useSelector((state) => state.game.resetRow);

  if (rowId === resetRow) backgroundColor = '#d4cfcf';

  const row = [];

  for (let i = 0; i < length; i++) {
    row.push(
      <Square
       key = {`square${rowId}${i}`}
      reset = {resetRow === rowId ? true : false}
        value={
          rowId === currentRow
            ? currentWord[i]
            : previousWords[5 * rowId + i] || ''
        }
      />
    );
  }
  return <div className="row-container">{row}</div>;
}

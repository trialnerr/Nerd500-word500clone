import React from 'react';
import KeyBoardButton from './KeyBoardButton.jsx';

const rows = [
  ['_', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['HINT', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['DEL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
];
//keyboard component returns the keyboard buttons
export default function Keyboard() {
  //render each row of the keyboard
  const renderRow = (index) => {
    const keyboardRow = [];
    rows[index].map((option) => keyboardRow.push(<KeyBoardButton key={option} alphabet={option} />));
    console.log('keyboardRow', keyboardRow);
    return <div id = {`row${index}`}>
       {keyboardRow}
    </div>;
  };

  return (
    <div id='keyboard-wrapper'>
      <div id='keyboard-container' >
       {rows.map((_, index) => renderRow(index))}
      </div>
    </div>
  );
}

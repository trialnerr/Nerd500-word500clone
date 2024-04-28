import React from 'react';
import KeyBoardButton from './KeyBoardButton.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLetter, updateWord, deleteLetter } from '../reducers/gameReducers';
import { handleEnterKey, handleDeleteKey , handleLetterInput} from '../utilFunctions.js/keyboardFunctions.js';


const rows = [
  ['_', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['HINT', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['DEL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
];
//keyboard component returns the keyboard buttons
export default function Keyboard() {
  const dispatch = useDispatch();
  const guess = useSelector((state) => state.game.currentWord);

  //render each row of the keyboard
  const renderRow = (index) => {
    const keyboardRow = [];
    rows[index].map((option) =>
      keyboardRow.push(<KeyBoardButton key={option} alphabet={option} />)
    );
    return <div id={`row${index}`}>{keyboardRow}</div>;
  };

  // Handle key press events
  useEffect(() => {
    const handleKeyPress = (event) => {
      
      const keyPressed = event.key.toUpperCase();
      console.log(/^[A-Z_]$/.test(keyPressed), keyPressed);
     
      if (keyPressed === 'ENTER') {
        return handleEnterKey(guess, dispatch, updateWord);
      } else if (keyPressed === 'BACKSPACE') {
        // If the pressed key is Backspace, delete the last letter
        return handleDeleteKey(dispatch, deleteLetter);
      } else if (/^[A-Z_]$/.test(keyPressed)) {
        // If the pressed key is a letter, update currentLetter
        return handleLetterInput(dispatch, updateLetter, keyPressed);
      }
    };

    document.addEventListener('keydown', handleKeyPress, true);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [guess, dispatch]);

  return (
    <div id='keyboard-wrapper'>
      <div id='keyboard-container'>
        {rows.map((_, index) => renderRow(index))}
      </div>
    </div>
  );
}

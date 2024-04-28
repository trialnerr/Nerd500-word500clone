import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import * as gameFunc from '../utilFunctions.js/game';
import { handleEnterKey, handleDeleteKey, handleLetterInput } from '../utilFunctions.js/keyboardFunctions.js';
import {
  updateLetter,
  deleteLetter,
  updateWord,
} from '../reducers/gameReducers';

export default function KeyBoardButton({ alphabet }) {
  const dispatch = useDispatch();
  const guess = useSelector((state) => state.game.currentWord);
  const previousWords = useSelector((state) => state.game.previousWords);

  //if the letter has been used before, we want to change the background color
  let backgroundColor = previousWords.includes(alphabet) ? '#d4cfcf' : null;

  //we still need to do logic for _ key
  function letterUpdateHandler() {
    if (alphabet === 'ENTER') {
      //we need to first check if the guess is longer than 5 words
      handleEnterKey(guess, dispatch, updateWord);
    } else if (alphabet === 'DEL') {
      return handleDeleteKey(dispatch, deleteLetter);
    } else if (alphabet === 'HINT') {
      return;
    } else if (alphabet === '_') {
      return;
      //this is for other letters of the alphabet
    } else if (/^[A-Z_]$/.test(alphabet)) {
      // event.target.style.backgroundColor = "grey";
      return handleLetterInput(dispatch, updateLetter, alphabet);
    } else {
      return;
    }
  }

  return (
    <button
      style={{ backgroundColor: backgroundColor || '#ffffff' }}
      onClick={letterUpdateHandler}
      className='keyboard-button'
    >
      {alphabet}
    </button>
  );
}

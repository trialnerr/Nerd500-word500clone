import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import * as gameFunc from '../reducers/game';
import {
  updateLetter,
  deleteLetter,
  updateWord,
} from '../reducers/gameReducers';

export default function KeyBoardButton({ alphabet }) {
  let backgroundColor = '';
  const dispatch = useDispatch();

  const guess = useSelector((state) => state.game.currentWord);
  const previousWords = useSelector((state) => state.game.previousWords);
  const wordChoice = useSelector((state) => state.game.currentWordChoice);

  //update the background of the letter
  if (previousWords.includes(alphabet)) backgroundColor = '#d4cfcf';

  //we still need to do logic for _ key
  function letterUpdateHandler() {
    if (alphabet === 'ENTER') {
      //we need to first check if the guess is longer than 5 words
      if (guess.length === 5) {
        const isValidWord = gameFunc.checkValid(guess);
        const greenYellowRedCount = gameFunc.compareWithCurrentWord(
          guess,
          wordChoice
        );
        return dispatch(updateWord({ isValidWord, greenYellowRedCount }));
      }
    } else if (alphabet === 'DEL') {
      return dispatch(deleteLetter());
    } else if (alphabet === 'HINT') {
      return;
    } else if (alphabet === '_') {
      return;
      //this is for other letters of the alphabet
    } else {
      // event.target.style.backgroundColor = "grey";
      return dispatch(updateLetter(alphabet));
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
import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import * as gameFunc from '../reducers/game';

import { useSelector } from 'react-redux';

const row1 = ['_', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const row2 = ['HINT', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const row3 = ['DEL', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

export default function Keyboard() {
  function KeyBoardButton({ alphabet }) {
    let backgroundColor = '';
    const dispatch = useDispatch();
    const previousWords = useSelector((state) => state.game.previousWords);
    const guess = useSelector((state) => state.game.currentWord);
    const wordChoice = useSelector((state) => state.game.currentWordChoice);

    if (previousWords.includes(alphabet)) backgroundColor = '#d4cfcf';

    function letterUpdateHandler() {
      if (alphabet === 'ENTER') {
        const bool = gameFunc.checkValid(guess);
        const RGB = gameFunc.compareWithCurrentWord(guess, wordChoice);
        return dispatch(actions.updateWordActionCreator(bool, RGB));
      }

      if (alphabet === 'DEL') {
        return dispatch(actions.deleteWordActionCreator());
      }

      if (alphabet === 'HINT') {
        return;
      } else {
        // event.target.style.backgroundColor = "grey";
        return dispatch(actions.addLetterActionCreator(alphabet));
      }
    }

    return (
      <button
        style={{ backgroundColor: backgroundColor || '#ffffff' }}
        onClick={letterUpdateHandler}
        className="keyboard-button"
      >
        {alphabet}
      </button>
    );
  }

  const keyboard1 = [];
  for (const option of row1) {
    keyboard1.push(<KeyBoardButton key={option} alphabet={option} />);
  }

  const keyboard2 = [];
  for (const option of row2) {
    keyboard2.push(<KeyBoardButton key={option} alphabet={option} />);
  }

  const keyboard3 = [];
  for (const option of row3) {
    keyboard3.push(<KeyBoardButton key={option} alphabet={option} />);
  }

  return (
    <div id="keyboard-wrapper">
      <div id="keyboard-container">
        <div id="row1">{keyboard1}</div>
        <div id="row2">{keyboard2}</div>
        <div id="row3">{keyboard3}</div>
      </div>
    </div>
  );
}

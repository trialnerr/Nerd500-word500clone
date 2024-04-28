import * as gameFunc from './game';
import { wordChoice } from './game';

export const handleEnterKey = (guess, dispatch, updateWord) => {
  //if guess includes underscore return
  if (guess.includes('_')) {
    return;
  }
  else if (guess.length === 5) {
    const isValidWord = gameFunc.checkValid(guess);
    const greenYellowRedCount = gameFunc.compareWithCurrentWord(
      guess,
      wordChoice
    );
    return dispatch(updateWord({ isValidWord, greenYellowRedCount }));
  }
  else {
    alert('Please enter a 5 letter word.');
    return;
  }
};

export const handleDeleteKey = (dispatch, deleteLetter) => {
  return dispatch(deleteLetter());
};

export const handleLetterInput = (dispatch, updateLetter, letter)=> {
   return dispatch(updateLetter(letter));
};

export const handleHint = {}; 
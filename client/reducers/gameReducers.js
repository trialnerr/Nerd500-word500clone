import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
  currentWord: '',
  currentLetter: '',
  currentRow: 0,
  previousWords: '',
  greenYellowRedCount: '',
  currentColor: '',
  resetRow: null,
};

//create a gameLogic Slice
const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateLetter(state, action) {
      //if the currentWord is less than 5, add the currentLetter to the currentWord
      state.currentLetter = action.payload;
      if (state.currentWord.length < 5) {
        state.currentWord += state.currentLetter;
      } else {
        return state;
      }
    },
    deleteLetter(state) {
      state.currentWord = state.currentWord.slice(0, -1);
    },
    //if the word is valid, update the currentWord, currentLetter,
    //previousWords, currentRow, and greenYellowRedCount
    updateWord(state, action) {
      if (action.payload.isValidWord) {
        state.previousWords += state.currentWord;
        state.currentWord = '';
        state.currentLetter = '';
        state.currentRow += 1;
        state.greenYellowRedCount += action.payload.greenYellowRedCount;
      } else {
        return state;
      }
    },
    resetRow(state, action) {
      state.resetRow = action.payload;
    },
    changeColor(state, action) {
      state.currentColor = action.payload;
    },
  },
});

export default gameSlice.reducer;
export const { updateLetter, deleteLetter, updateWord, resetRow, changeColor } =
  gameSlice.actions;



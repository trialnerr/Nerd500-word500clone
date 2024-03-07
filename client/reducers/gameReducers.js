import * as types from "../constants/actionTypes";
import * as gamesFunc from "../reducers/game";

let currentChoice = gamesFunc.pickCurrentWord();

const initialState = {
  currentWord: "",
  currentLetter: "",
  currentRow: 0,
  previousWords: "",
  currentWordChoice: "which",
  RGB: "",
  currentColor: "",
  resetRow: null
};

export const gameReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_LETTER: {
      let currentWord = state.currentWord;
      const currentLetter = action.payload.letter;
      if (state.currentWord.length < 5) {
        currentWord = state.currentWord + currentLetter;
      }
      return {
        ...state,
        currentLetter,
        currentWord,
      };
    }
    case types.UPDATE_WORD: {
      if (action.payload.bool) {
        const currentWord = "";
        const previousWords = state.previousWords + state.currentWord;
        const currentRow = state.currentRow + 1;
        const RGB = state.RGB + action.payload.RGB;
        return {
          ...state,
          currentWord,
          currentRow,
          previousWords,
          RGB,
        };
      } else {
        return state;
      }
    }
    case types.DELETE_LETTER: {
      const currentWord = state.currentWord.slice(0, -1);
      return {
        ...state,
        currentWord,
      };
    }
    case types.CHANGE_COLOR: {
      const currentColor = action.payload.color;
      return {
        ...state,
        currentColor,
      };
    }
    case types.RESET_ROW:{
      const resetRow = action.payload.resetRowId;
      return {
        ...state,
        resetRow,
      };
    }
    default: {
      return state;
    }
  }
};

import * as types from "../constants/actionTypes";

const initialState = {
  currentWord: "",
  currentLetter: "",
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
        return {
          ...state,
          currentWord,
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
    default: {
      return state;
    }
  }
};

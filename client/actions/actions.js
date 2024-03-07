import * as types from "../constants/actionTypes";

export const addLetterActionCreator = (letter) => ({
    type: types.UPDATE_LETTER,
    payload: { letter }
});

export const updateWordActionCreator = (bool, RGB) => ({
  type: types.UPDATE_WORD,
  payload: { bool, RGB },
});

export const deleteWordActionCreator = () => ({
  type: types.DELETE_LETTER
});

// export const checkCurrentWordValidity = (bool) => ({
//  type: types.CHECK_VALIDITY, 
//  payload: {bool}
// });
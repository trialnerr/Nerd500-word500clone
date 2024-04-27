import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducers';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

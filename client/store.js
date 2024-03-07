import { configureStore } from "@reduxjs/toolkit";
import { gameReducers } from "./reducers/gameReducers";

export const store = configureStore({
  reducer: {
    game: gameReducers,
  },
});

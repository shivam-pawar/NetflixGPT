import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import movieReducer from "../slices/movieSlice";
import userSettingsReducer from "../slices/userSettingsSlice";
import gptReducer from "../slices/gptSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    userSettings: userSettingsReducer,
    gpt: gptReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    previewMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPreviewMovie: (state, action) => {
      state.previewMovie = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addPreviewMovie } = movieSlice.actions;

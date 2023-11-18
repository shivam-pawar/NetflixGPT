import { createSlice } from "@reduxjs/toolkit";

const userSettingsSlice = createSlice({
  initialState: { askGPT: false, showLoader: false },
  name: "userSettings",
  reducers: {
    switchToAskGPT: (state, action) => {
      state.askGPT = action.payload;
    },
    setShowLoader: (state, action) => {
      state.showLoader = action.payload;
    },
  },
});

export default userSettingsSlice.reducer;
export const { switchToAskGPT, setShowLoader } = userSettingsSlice.actions;

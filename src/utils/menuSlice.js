import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "appSlice",
  initialState: {
    menuOpen: true,
  },

  reducers: {
    hideMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { hideMenu } = menuSlice.actions;
export default menuSlice.reducer;

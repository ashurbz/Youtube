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
    menuHidden: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { hideMenu, menuHidden } = menuSlice.actions;
export default menuSlice.reducer;

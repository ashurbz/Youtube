import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    cache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { cache } = cacheSlice.actions;
export default cacheSlice.reducer;

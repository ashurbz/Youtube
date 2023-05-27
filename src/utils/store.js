import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import cacheSlice from "./cacheSlice";

const store = configureStore({
  reducer: {
    appSlice: menuSlice,
    searchSlice: cacheSlice,
  },
});

export default store;

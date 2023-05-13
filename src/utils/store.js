import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const store = configureStore({
  reducer: {
    appSlice: menuSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    appSlice: menuSlice,
    searchSlice: cacheSlice,
    chat: chatSlice,
  },
});

export default store;

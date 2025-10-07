import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducerSlice/adminReducer";

// Create store
export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export default store;

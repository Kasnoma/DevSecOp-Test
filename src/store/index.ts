import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootSlice";

export const store = configureStore({
  reducer,
});

export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


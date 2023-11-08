import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { UserAPI } from "@/services/UserService";
import { userSliceReducer } from "./reducers";

const rootReducer = combineReducers({
  userSlice: userSliceReducer,
  [UserAPI.reducerPath]: UserAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(UserAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

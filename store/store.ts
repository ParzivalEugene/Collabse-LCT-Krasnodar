import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { HRApi } from "@/services/HRService";
import { WorkerAPI } from "@/services/WorkerService";
import { userSliceReducer } from "./reducers";

const rootReducer = combineReducers({
  userSlice: userSliceReducer,
  [WorkerAPI.reducerPath]: WorkerAPI.reducer,
  [HRApi.reducerPath]: HRApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(WorkerAPI.middleware, HRApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

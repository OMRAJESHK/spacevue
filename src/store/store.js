import { combineReducers, configureStore } from "@reduxjs/toolkit";
import missionsSlice from "./missionsSlice";

const combineReducer = combineReducers({
  missionState: missionsSlice,
});

export default configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

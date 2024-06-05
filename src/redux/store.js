import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reudcer/counterReducer";
import serviceReducer from "./reudcer/serviceReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import globalData from "./DataRedux";
import { dashboardData } from "./DataRedux";

const persistConfig = {
  key: "root",
  storage,
};

const reducersss = combineReducers({
  counter: counterReducer,
  service: serviceReducer,
  data: globalData.reducer,
  dashboardData: dashboardData.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducersss);

export const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export default persistor;

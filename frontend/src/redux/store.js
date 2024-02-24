import { combineReducers, legacy_createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as authReducer } from "./Auth/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer);
export const persistor = persistStore(store);

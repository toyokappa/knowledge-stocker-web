import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth", "filter"]
};

export default history => {
  const middlewares = [routerMiddleware(history), thunk];
  const persistedReducer = persistReducer(persistConfig, rootReducer(history));
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};

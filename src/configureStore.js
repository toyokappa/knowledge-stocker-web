import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

export default history => {
  const middlewares = [routerMiddleware(history), thunk];
  const store = createStore(rootReducer(history), applyMiddleware(...middlewares));
  return { store };
};

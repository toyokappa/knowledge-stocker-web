import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import achievement from "./achievement";
import auth from "./auth";
import filter from "./filter";
import ranking from "./ranking";
import user from "./user";
import word from "./word";

export default history =>
  combineReducers({ router: connectRouter(history), achievement, auth, filter, ranking, user, word });

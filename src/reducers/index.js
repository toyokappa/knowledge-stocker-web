import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import filter from "./filter";
import user from "./user";
import word from "./word";

export default history => combineReducers({ router: connectRouter(history), auth, filter, user, word });

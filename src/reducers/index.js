import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import filter from "./filter";
import nextId from "./nextId";
import user from "./user";
import word from "./word";
import knowledges from "./knowledges";

export default history =>
  combineReducers({ router: connectRouter(history), auth, filter, nextId, user, word, knowledges });

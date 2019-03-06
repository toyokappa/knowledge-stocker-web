import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import filter from "./filter";
import nextId from "./nextId";
import wordIds from "./wordIds";
import words from "./words";
import knowledges from "./knowledges";

export default history =>
  combineReducers({ router: connectRouter(history), auth, filter, nextId, wordIds, words, knowledges });

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import wordIds from "./wordIds";
import words from "./words";
import knowledges from "./knowledges";

export default history => combineReducers({ router: connectRouter(history), wordIds, words, knowledges });

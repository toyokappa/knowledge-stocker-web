import { authenticate } from "../apis/authApi";
import search from "../apis/googleApi";

export function signIn(email, password) {
  return dispatch => {
    authenticate(email, password).then(res => {
      const { data } = res;
      const { authToken } = data;
      localStorage.setItem("authToken", authToken);
      dispatch({ type: "SIGN_IN" });
    });
  };
}

export function addWord(wordId, wordText) {
  return { type: "ADD_WORD", wordId, wordText };
}

export function updateWord(wordId, wordText) {
  return { type: "UPDATE_WORD", wordId, wordText };
}

export function removeWord(wordId, knowledgeIds) {
  return { type: "REMOVE_WORD", wordId, knowledgeIds };
}

export function addKnowledge(knowledgeId, wordId, url, understanding) {
  return dispatch => {
    search(url).then(res => {
      const { data } = res;
      const { title } = data.items[0];
      dispatch({
        type: "ADD_KNOWLEDGE",
        knowledgeId,
        wordId,
        url,
        title,
        understanding
      });
    });
  };
}

export function updateKnowledge(knowledgeId, url, understanding) {
  return dispatch => {
    search(url).then(res => {
      const { data } = res;
      const { title } = data.items[0];
      dispatch({
        type: "UPDATE_KNOWLEDGE",
        knowledgeId,
        url,
        title,
        understanding
      });
    });
  };
}

export function removeKnowledge(wordId, knowledgeId) {
  return { type: "REMOVE_KNOWLEDGE", wordId, knowledgeId };
}

export function setFilter(filter) {
  return { type: "SET_FILTER", filter };
}

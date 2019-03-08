import { authenticateUser, signUpUser, signInUser } from "../apis/authApi";
import search from "../apis/googleApi";

export function authenticate(authToken) {
  return dispatch => {
    authenticateUser(authToken)
      .then(() => {
        dispatch({ type: "SIGN_IN" });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function signUp(username, email, password, passwordConfirmation) {
  return dispatch => {
    signUpUser(username, email, password, passwordConfirmation).then(() => {
      dispatch(signIn(email, password));
    });
  };
}

export function signIn(email, password) {
  return dispatch => {
    signInUser(email, password).then(res => {
      const { data } = res;
      const { authToken } = data;
      localStorage.setItem("authToken", authToken);
      dispatch({ type: "SIGN_IN" });
    });
  };
}

export function signOut() {
  return dispatch => {
    localStorage.removeItem("authToken");
    dispatch({ type: "SIGN_OUT" });
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

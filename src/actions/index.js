import { authenticateUser, signUpUser, signInUser } from "../apis/authApi";
import { getUserWords, postUserWords, deleteUserWords, getWord } from "../apis/mainApi";
import search from "../apis/googleApi";

export function authenticate(authToken) {
  return dispatch => {
    authenticateUser(authToken)
      .then(res => {
        const { data } = res;
        const { userName } = data;
        dispatch({ type: "SUCCESS_SIGN_IN", userName });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function signUp(name, email, password, passwordConfirmation) {
  return dispatch => {
    signUpUser(name, email, password, passwordConfirmation).then(() => {
      dispatch(signIn(email, password));
    });
  };
}

export function signIn(email, password) {
  return dispatch => {
    signInUser(email, password).then(res => {
      const { data } = res;
      const { authToken, userName } = data;
      localStorage.setItem("authToken", authToken);
      dispatch({ type: "SUCCESS_SIGN_IN", userName });
    });
  };
}

export function signOut() {
  return dispatch => {
    localStorage.removeItem("authToken");
    dispatch({ type: "SIGN_OUT" });
  };
}

export function fetchUserWords(userName) {
  return dispatch => {
    dispatch({ type: "REQUEST_USER_WORDS" });
    getUserWords(userName)
      .then(res => {
        const words = res.data;
        dispatch({ type: "SUCCESS_USER_WORDS", words });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_USER_WORDS", error });
      });
  };
}

export function fetchWord(wordId) {
  return dispatch => {
    dispatch({ type: "REQUEST_WORD" });
    getWord(wordId)
      .then(res => {
        const word = res.data;
        dispatch({ type: "SUCCESS_WORD", ...word });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_WORD", error });
      });
  };
}

export function createUserWords(userName, wordText) {
  return dispatch => {
    dispatch({ type: "REQUEST_USER_WORDS" });
    postUserWords(userName, wordText)
      .then(res => {
        const words = res.data;
        dispatch({ type: "SUCCESS_USER_WORDS", words });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_USER_WORDS", error });
      });
  };
}

export function destroyUserWords(userName, wordId) {
  return dispatch => {
    dispatch({ type: "REQUEST_USER_WORDS" });
    deleteUserWords(userName, wordId)
      .then(res => {
        const words = res.data;
        dispatch({ type: "SUCCESS_USER_WORDS", words });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_USER_WORDS", error });
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

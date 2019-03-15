// TODO: メソッド名の一貫性がないので整理する
import { authenticateUser, signUpUser, signInUser } from "../apis/authApi";
import {
  getUserWords,
  postUserWords,
  deleteUserWords,
  getWord,
  patchWord,
  postWordKnowledges,
  patchKnowledge,
  deleteKnowledge
} from "../apis/mainApi";

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

export function updateWord(wordId, wordText) {
  return dispatch => {
    dispatch({ type: "REQUEST_WORD" });
    patchWord(wordId, wordText)
      .then(res => {
        const word = res.data;
        dispatch({ type: "SUCCESS_WORD", ...word });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_WORD", error });
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

export function createWordKnowledges(wordId, url, understanding) {
  return dispatch => {
    dispatch({ type: "REQUEST_WORD_KNOWLEDGES" });
    postWordKnowledges(wordId, url, understanding)
      .then(res => {
        const knowledges = res.data;
        dispatch({ type: "SUCCESS_WORD_KNOWLEDGES", knowledges });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_WORD_KNOWLEDGES", error });
      });
  };
}

export function updateWordKnowledges(knowledgeId, url, understanding) {
  return dispatch => {
    dispatch({ type: "REQUEST_WORD_KNOWLEDGES" });
    patchKnowledge(knowledgeId, url, understanding)
      .then(res => {
        const knowledges = res.data;
        dispatch({ type: "SUCCESS_WORD_KNOWLEDGES", knowledges });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_WORD_KNOWLEDGES", error });
      });
  };
}

export function destroyWordKnowledges(knowledgeId) {
  return dispatch => {
    dispatch({ type: "REQUEST_WORD_KNOWLEDGES" });
    deleteKnowledge(knowledgeId)
      .then(res => {
        const knowledges = res.data;
        dispatch({ type: "SUCCESS_WORD_KNOWLEDGES", knowledges });
      })
      .catch(error => {
        dispatch({ type: "FAILURE_WORD_KNOWLEDGES", error });
      });
  };
}

export function setFilter(filter) {
  return { type: "SET_FILTER", filter };
}

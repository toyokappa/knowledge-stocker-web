import { toast } from "react-toastify";

import * as sync from "./sync";
import * as authApi from "../apis/authApi";
import * as mainApi from "../apis/mainApi";

export function authenticate(authToken) {
  return async dispatch => {
    dispatch(sync.requestSignIn());
    const res = await authApi.authenticate(authToken);
    if (res.status !== 200) return dispatch(sync.failureSignIn(res.statusText));

    const { userName } = await res.json();
    dispatch(sync.successSignIn(userName));
  };
}

export function signUp(name, email, password, passwordConfirmation) {
  return async dispatch => {
    dispatch(sync.requestSignUp());
    const res = await authApi.signUp(name, email, password, passwordConfirmation);
    if (res.status !== 200) {
      const errorMessages = await res.json();
      toast.error("登録できませんでした");
      return dispatch(sync.failureSignUp(res.statusText, errorMessages));
    }

    const { authToken, userName } = await res.json();
    localStorage.setItem("authToken", authToken);
    dispatch(sync.successSignUp(userName));
  };
}

export function signIn(email, password) {
  return async dispatch => {
    dispatch(sync.requestSignIn());
    const res = await authApi.signIn(email, password);
    if (res.status !== 200) {
      toast.error("ログインできませんでした");
      return dispatch(sync.failureSignIn(res.statusText));
    }

    const { authToken, userName } = await res.json();
    localStorage.setItem("authToken", authToken);
    dispatch(sync.successSignIn(userName));
  };
}

export function signOut() {
  return dispatch => {
    localStorage.removeItem("authToken");
    dispatch(sync.successSignOut());
  };
}

export function indexWords(userName) {
  return async dispatch => {
    dispatch(sync.requestWords());
    const res = await mainApi.getUserWords(userName);
    if (res.status !== 200) return dispatch(sync.failureWords(res.statusText));

    const words = await res.json();
    dispatch(sync.successWords(words));
  };
}

export function showWord(wordId) {
  return async dispatch => {
    dispatch(sync.requestWord);
    const res = await mainApi.getWord(wordId);
    if (res.status !== 200) return dispatch(sync.failureWord(res.statusText));

    const word = await res.json();
    dispatch(sync.successWord(word));
  };
}

export function createWord(userName, wordText) {
  return async dispatch => {
    dispatch(sync.requestWords());
    const res = await mainApi.postUserWords(userName, wordText);
    if (res.status !== 200) return dispatch(sync.failureWords(res.statusText));

    const words = await res.json();
    dispatch(sync.successWords(words));
  };
}

export function updateWord(wordId, wordText) {
  return async dispatch => {
    dispatch(sync.requestWord);
    const res = await mainApi.patchWord(wordId, wordText);
    if (res.status !== 200) return dispatch(sync.failureWord(res.statusText));

    const word = await res.json();
    dispatch(sync.successWord(word));
  };
}

export function destroyWord(userName, wordId) {
  return async dispatch => {
    dispatch(sync.requestWords());
    const res = await mainApi.deleteUserWords(userName, wordId);
    if (res.status !== 200) return dispatch(sync.failureWords(res.statusText));

    const words = await res.json();
    dispatch(sync.successWords(words));
  };
}

export function createKnowledge(wordId, url, understanding) {
  return async dispatch => {
    dispatch(sync.requestKnowledges());
    const res = await mainApi.postWordKnowledges(wordId, url, understanding);
    if (res.status !== 200) return dispatch(sync.failureKnowledges(res.statusText));

    const knowledges = await res.json();
    dispatch(sync.successKnowledges(knowledges));
  };
}

export function updateKnowledge(knowledgeId, url, understanding) {
  return async dispatch => {
    dispatch(sync.requestKnowledges());
    const res = await mainApi.patchKnowledge(knowledgeId, url, understanding);
    if (res.status !== 200) return dispatch(sync.failureKnowledges(res.statusText));

    const knowledges = await res.json();
    dispatch(sync.successKnowledges(knowledges));
  };
}

export function destroyKnowledge(knowledgeId) {
  return async dispatch => {
    dispatch(sync.requestKnowledges());
    const res = await mainApi.deleteKnowledge(knowledgeId);
    if (res.status !== 200) return dispatch(sync.failureKnowledges(res.statusText));

    const knowledges = await res.json();
    dispatch(sync.successKnowledges(knowledges));
  };
}

export function showAchievement(userName) {
  return async dispatch => {
    dispatch(sync.requestAchievement());
    const res = await mainApi.getUserAchievement(userName);
    if (res.status !== 200) return dispatch(sync.failureAchievement(res.statusText));

    const achievement = await res.json();
    dispatch(sync.successAchievement(achievement));
  };
}

export function showRanking(term) {
  return async dispatch => {
    dispatch(sync.requestRanking());
    const res = await mainApi.getRanking(term);
    if (res.status !== 200) return dispatch(sync.failureRanking(res.statusText));

    const ranking = await res.json();
    dispatch(sync.successRanking(ranking));
  };
}

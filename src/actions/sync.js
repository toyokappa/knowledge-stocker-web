import * as types from "../constants/ActionTypes";

export function requestSignIn() {
  return { type: types.REQUEST_SIGN_IN };
}
export function successSignIn(userName, imageUrl) {
  return { type: types.SUCCESS_SIGN_IN, userName, imageUrl };
}
export function failureSignIn(error) {
  return { type: types.FAILURE_SIGN_IN, error };
}

export function successSignOut() {
  return { type: types.SUCCESS_SIGN_OUT };
}

export function requestWords() {
  return { type: types.REQUEST_WORDS };
}
export function successWords(words) {
  return { type: types.SUCCESS_WORDS, words };
}
export function failureWords(error) {
  return { type: types.FAILURE_WORDS, error };
}

export function requestWord() {
  return { type: types.REQUEST_WORD };
}
export function successWord(word) {
  return { type: types.SUCCESS_WORD, ...word };
}
export function failureWord(error) {
  return { type: types.FAILURE_WORD, error };
}

export function requestKnowledges() {
  return { type: types.REQUEST_KNOWLEDGES };
}
export function successKnowledges(knowledges) {
  return { type: types.SUCCESS_KNOWLEDGES, knowledges };
}
export function failureKnowledges(error) {
  return { type: types.FAILURE_KNOWLEDGES, error };
}

export function requestAchievement() {
  return { type: types.REQUEST_ACHIEVEMENT };
}
export function successAchievement(achievement) {
  return { type: types.SUCCESS_ACHIEVEMENT, ...achievement };
}
export function failureAchievement(error) {
  return { type: types.FAILURE_ACHIEVEMENT, error };
}

export function requestRanking() {
  return { type: types.REQUEST_RANKING };
}
export function successRanking(ranking) {
  return { type: types.SUCCESS_RANKING, ...ranking };
}
export function failureRanking(error) {
  return { type: types.FAILURE_RANKING, error };
}

export function setFilter(filter) {
  return { type: types.SET_FILTER, filter };
}

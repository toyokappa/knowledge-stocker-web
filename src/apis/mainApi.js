import axios from "axios";

const authToken = localStorage.getItem("authToken");
axios.defaults.baseURL = "http://localhost:3000/api/v1";
axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

export function getUserWords(userName) {
  const path = `/users/${userName}/words`;
  return axios.get(path);
}

export function getWord(wordId) {
  const path = `/words/${wordId}`;
  return axios.get(path);
}

export function postUserWords(userName, wordText) {
  const path = `/users/${userName}/words`;
  return axios.post(path, { text: wordText });
}

export function patchWord(wordId, wordText) {
  const path = `/words/${wordId}`;
  return axios.patch(path, { text: wordText });
}

export function deleteUserWords(userName, wordId) {
  const path = `/users/${userName}/words/${wordId}`;
  return axios.delete(path);
}

export function postWordKnowledges(wordId, url, understanding) {
  const path = `/words/${wordId}/knowledges`;
  return axios.post(path, { url, understanding });
}

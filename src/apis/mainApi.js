import axios from "axios";

const authToken = localStorage.getItem("authToken");
axios.defaults.baseURL = "http://localhost:3000/api/v1";
axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

export function getUserWords(userName) {
  const path = `/users/${userName}/words`;
  return axios.get(path);
}

export function postUserWords(userName, wordText) {
  const path = `/users/${userName}/words`;
  return axios.post(path, { text: wordText });
}

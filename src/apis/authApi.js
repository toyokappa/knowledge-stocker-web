import axios from "axios";

const host = "http://localhost:3000/api/v1";

export function authenticateUser(authToken) {
  const url = `${host}/sign_in`;
  return axios.get(url, { headers: { Authorization: `Bearer ${authToken}` } });
}

export function signUpUser(username, email, password, passwordConfirmation) {
  const url = `${host}/sign_up`;
  return axios.post(url, { username, email, password, password_confirmation: passwordConfirmation });
}

export function signInUser(email, password) {
  const url = `${host}/sign_in`;
  return axios.post(url, { email, password });
}

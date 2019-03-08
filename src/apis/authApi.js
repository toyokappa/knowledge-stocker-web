import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

export function authenticateUser(authToken) {
  const path = "/sign_in";
  return axios.get(path, { headers: { Authorization: `Bearer ${authToken}` } });
}

export function signUpUser(name, email, password, passwordConfirmation) {
  const path = "/sign_up";
  return axios.post(path, { name, email, password, password_confirmation: passwordConfirmation });
}

export function signInUser(email, password) {
  const path = "/sign_in";
  return axios.post(path, { email, password });
}

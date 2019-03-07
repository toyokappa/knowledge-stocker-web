import axios from "axios";

const url = "http://localhost:3000/api/v1/sign_in";

export function authenticateUser(authToken) {
  return axios.get(url, { headers: { Authorization: `Bearer ${authToken}` } });
}

export function signInUser(email, password) {
  return axios.post(url, { email, password });
}

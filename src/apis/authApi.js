import axios from "axios";

export function authenticate(email, password) {
  const url = "http://localhost:3000/api/v1/sign_in";
  return axios.post(url, { email, password });
}

const baseURL = "http://localhost:3000/api/v1";
const contentJson = { "Content-Type": "application/json" };

export function authenticate(authToken) {
  const path = `${baseURL}/authenticate`;
  return fetch(path, { headers: { Authorization: `Bearer ${authToken}` } });
}

export function signUp(name, email, password, passwordConfirmation) {
  const path = `${baseURL}/sign_up`;
  const params = { name, email, password, password_confirmation: passwordConfirmation };
  return fetch(path, {
    method: "POST",
    headers: contentJson,
    body: JSON.stringify(params)
  });
}

export function signIn(uid, name, email, imageUrl) {
  const path = `${baseURL}/sign_in`;
  const params = { uid, name, email, imageUrl };
  return fetch(path, {
    method: "POST",
    headers: contentJson,
    body: JSON.stringify(params)
  });
}

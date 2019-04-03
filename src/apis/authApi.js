const baseURL = `${process.env.REACT_APP_API_HOST}/api/v1`;
const contentJson = { "Content-Type": "application/json" };

export function authenticate(authToken) {
  const path = `${baseURL}/authenticate`;
  return fetch(path, { headers: { Authorization: `Bearer ${authToken}` } });
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

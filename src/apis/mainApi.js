const baseURL = "http://localhost:3000/api/v1";
const contentJson = { "Content-Type": "application/json" };

function authorization() {
  const authToken = localStorage.getItem("authToken");
  return { Authorization: `Bearer ${authToken}` };
}

export function getUserWords(userName) {
  const path = `${baseURL}/users/${userName}/words`;
  return fetch(path, { headers: authorization() });
}

export function getWord(wordId) {
  const path = `${baseURL}/words/${wordId}`;
  return fetch(path, { headers: authorization() });
}

export function postUserWords(userName, wordText) {
  const path = `${baseURL}/users/${userName}/words`;
  const params = { text: wordText };
  return fetch(path, {
    method: "POST",
    body: JSON.stringify(params),
    headers: { ...authorization(), ...contentJson }
  });
}

export function patchWord(wordId, wordText) {
  const path = `${baseURL}/words/${wordId}`;
  const params = { text: wordText };
  return fetch(path, {
    method: "PATCH",
    body: JSON.stringify(params),
    headers: { ...authorization(), ...contentJson }
  });
}

export function deleteUserWords(userName, wordId) {
  const path = `${baseURL}/users/${userName}/words/${wordId}`;
  return fetch(path, {
    method: "DELETE",
    headers: authorization()
  });
}

export function postWordKnowledges(wordId, url, understanding) {
  const path = `${baseURL}/words/${wordId}/knowledges`;
  const params = { url, understanding };
  return fetch(path, {
    method: "POST",
    body: JSON.stringify(params),
    headers: { ...authorization(), ...contentJson }
  });
}

export function patchKnowledge(knowledgeId, url, understanding) {
  const path = `${baseURL}/knowledges/${knowledgeId}`;
  const params = { url, understanding };
  return fetch(path, {
    method: "PATCH",
    body: JSON.stringify(params),
    headers: { ...authorization(), ...contentJson }
  });
}

export function deleteKnowledge(knowledgeId) {
  const path = `${baseURL}/knowledges/${knowledgeId}`;
  return fetch(path, {
    method: "DELETE",
    headers: authorization()
  });
}

export function getUserAchievement(userName) {
  const path = `${baseURL}/users/${userName}/achievement`;
  return fetch(path, { headers: authorization() });
}

export function getRanking(term) {
  const path = `${baseURL}/ranking?term=${term}`;
  return fetch(path, { headers: authorization() });
}

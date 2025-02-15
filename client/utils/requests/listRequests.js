import makeRequest from "./request";

export const fetchList = async (listId, parentType, parentId, userId, token) => {
  const url = `/lists/${listId}?user=${userId}&${parentType}=${parentId}`;
  const body = {};

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`)

  const { data, status } = await makeRequest(url, "GET", body, headers);
  return { data, status };
}

export const createList = async (parentType, parentId, userId, token) => {
  const url = `/lists?user=${userId}&${parentType}=${parentId}`;
  const body = {};

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`)

  const { data, status } = await makeRequest(url, "POST", body, headers);
  return { data, status };
}

import superagent from "superagent";

const baseUrl = "";

function apiHelper({
  method = "get",
  url,
  endpoint,
  payload,
  query,
  token,
  type = "application/json",
}) {
  const _url = url || `${baseUrl}/${endpoint}`;

  const apiRequest = superagent(method, _url);
  if (token) {
    apiRequest.set("Authorization", token);
  }
  return apiRequest
    .set("Content-Type", type)
    .send(payload)
    .query(query)
    .catch((error = {}) => {
      throw error.response && error.response.body;
    });
}

export default apiHelper;

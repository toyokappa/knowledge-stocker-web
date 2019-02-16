import axios from "axios";

const apiKey = "AIzaSyCm-cU3LUvp4ABszV3hsaR5NQ1UQhWn1cE";
const searchId = "015542812127986367235:5mulwc2wbzk";
const endPoint = "https://www.googleapis.com/customsearch/v1";

export default function search(url) {
  return axios.get(endPoint, { params: { key: apiKey, cx: searchId, q: `info:${url}` } });
}

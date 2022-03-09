import axios from "axios";

const client_id = ""; // Your client id
const client_secret = ""; // Your secret

const clientAPI = (url: string, params?: any) =>
  axios.create({
    baseURL: url,
    params: params,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "access-control-allow-origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + client_id + ":" + client_secret,
    },
  });

export default clientAPI;

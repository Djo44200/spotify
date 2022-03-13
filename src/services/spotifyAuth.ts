import axios from "axios";
import qs from "qs";
import ENV from "../../env/env.json";

const client_id = ENV.VUE_APP_API_ID;
const client_secret = ENV.VUE_APP_CLIENT_SECRET;

export async function getAuth() {
  //Récupération du code
  const data = {
        response_type: "code",
        client_id: client_id,
        scope: "user-read-private user-read-email",
        redirect_uri: "http://localhost:3000/",
        state: "refdfwSdfertg",
        show_dialog: true,
  }
  return await axios.get(
    "https://accounts.spotify.com/authorize",
    {params:data}
  ).then(res=>{
    return res.request.responseURL;
  });
}
export async function getToken() {
  // récupération du token
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: client_id,
      password: client_secret,
    },
  };

  // Data object.
  const data = {
    grant_type: "client_credentials",
  };

  // Make the request using the URL, query string, data, and headers.
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    qs.stringify(data),
    headers
  );

  // Retrieve the access token from the response.
  const access_token = res.data.access_token;
  localStorage.setItem("access_token", access_token);
}

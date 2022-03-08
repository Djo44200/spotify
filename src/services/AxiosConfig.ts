import axios from "axios";



const client_id = "e5e4811acf954507b1b4a18856327089"; // Your client id
const client_secret = "a2cdd952897946119a8c7c430bdf324c"; // Your secret

const clientAPI = (url: string,params?:any) =>
  axios.create({
    baseURL: url,
    params:params,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      'access-control-allow-origin':'*',
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + client_id + ":" + client_secret,
    },
   
  });

export default clientAPI;

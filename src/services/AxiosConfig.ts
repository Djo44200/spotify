import axios from "axios";

const clientAPI = (url: string) =>
  axios.create({
    baseURL: url,
    withCredentials: false,
  });

export default clientAPI;

import axios from "axios";

const clientAPI = (url: string, params?: any) =>
  axios.create({
    baseURL: url,
    params: params,
    withCredentials: false,
  });

export default clientAPI;

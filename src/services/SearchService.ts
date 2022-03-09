import clientAPI from "./AxiosConfig";
const api = "https://api.spotify.com/v1";
const params: any = {
  q: "",
  type: "track,artist",
  limit: 20,
};

export default {
  getSearch(search: string) {
    params.q = search;
    return clientAPI(api, params).get("/search");
  },
};

import axios from "axios";

const params: any = {
  q: "",
  type: "track,artist",
  limit: 20,
};

export default class SearchService {
  public static async getSearch(search: string) {
    params.q = search;
    //Call Search API
    const result = await axios.get(
      "https://api.spotify.com/v1/search",
      {params:params,
      headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },}
    ).then(response => {
      return response.data;
    });

    return result;
  }
}

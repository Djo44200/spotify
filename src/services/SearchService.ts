import clientAPI from "./AxiosConfig";
const api = "https://api.spotify.com/v1";
const params: any = {
  q: "",
  type: "track,artist",
  limit: 20,
};

export default class SearchService {
  public static async getSearch(search: string) {
    params.q = search;
    //Call Search API
    const result = await clientAPI(api)
      .get("/search", {
        params: params,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response: any) => {
        return response.data;
      });

    return result;
  }
}

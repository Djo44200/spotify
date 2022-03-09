import clientAPI from "./AxiosConfig";
import mock from '../../mock/mock.json'
const api = "https://api.spotify.com/v1";
const params: any = {
  q: "",
  type: "track,artist",
  limit: 20,
};

export default class SearchService {
  // getSearch(search: string) {
  //   params.q = search;
  //   return clientAPI(api, params).get("/search");
  // },
  public static getSearch(search: string) {
    params.q = search;
    //Call Search API
    // const result = clientAPI(api, params).get("/search").then((response: any) => {
    //   return response.data;
    // });
    
		return mock;
	}
};

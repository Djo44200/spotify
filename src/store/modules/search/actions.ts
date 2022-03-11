import SearchService from "@/services/SearchService";

const loadSearch = (context: any, search: string) => {
  SearchService.getSearch(search).then((response) => {
    context.commit("setSearch", response);
  });
};

export { loadSearch };

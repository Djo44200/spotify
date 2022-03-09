import SearchService from "@/services/SearchService";

const loadSearch = (context: any, search: string) => {
  context.commit("setSearch", SearchService.getSearch(search));
};

export { loadSearch };

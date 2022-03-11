import Vuex from "vuex";

import * as AppMutations from "./appMutations";
import * as AppActions from "./appActions";
import * as AppGetters from "./appGetters";

import Search from "@/store/modules/search";
import Library from "@/store/modules/library";

export default new Vuex.Store({
  mutations: {
    ...AppMutations,
  },
  actions: {
    ...AppActions,
  },
  modules: {
    search: Search,
    library: Library,
  },
  getters: {
    ...AppGetters,
  },
});

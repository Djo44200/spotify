import Vuex from "vuex";

import * as AppMutations from "./appMutations";
import * as AppActions from "./appActions";
import * as AppGetters from "./appGetters";

const storeStateProps: any = {
  isAuthenticated: false,
  updatedAt: new Date(0),
};

export default new Vuex.Store({
  state: storeStateProps,
  mutations: {
    ...AppMutations,
  },
  actions: {
    ...AppActions,
  },
  modules: {},
  getters: {
    ...AppGetters,
  },
});

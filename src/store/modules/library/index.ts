import * as LibraryActions from "./actions";
import * as LibraryMutations from "./mutations";
import * as LibraryGetters from "./getters";
import type { LibraryStateProps } from "@/models/LibraryType";

const initialState: LibraryStateProps = {
  lists: [],
};

const librarys = {
  namespaced: true,
  state: initialState,
  mutations: {
    ...LibraryMutations,
  },
  actions: {
    ...LibraryActions,
  },
  getters: {
    ...LibraryGetters,
  },
};

export default librarys;

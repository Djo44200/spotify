import type { SearchStateProps } from '@/models/SearchTypes';

import * as SearchActions from './actions';
import * as SearchMutations from './mutations';
import * as SearchGetters from './getters';

const initialState: SearchStateProps = {
	artists: [],
	tracks: [],
};

const searchs = {
	namespaced: true,
	state: initialState,
	mutations: {
		...SearchMutations,
	},
	actions: {
		...SearchActions,
	},
	getters: {
		...SearchGetters,
	},
};

export default searchs;

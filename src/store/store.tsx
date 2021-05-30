import { createStore } from "easy-peasy";
import { StoreModel } from "../models/Store.model";

/*  Imports from Redux/easy-peasy:
  Easy Peasy is an abstraction of Redux
 */

const store = createStore<StoreModel>({
  page: {
    selectedPage: 1,
    select: (state, payload) => {
      state.selectedPage = payload;
    },
  },
  search: {
    searchText: "",
    search: (state, payload) => {
      state.searchText = payload;
    },
  },
});

export default store;

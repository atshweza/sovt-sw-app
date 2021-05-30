import { createStore } from "easy-peasy";
import { StoreModel } from "../models/store.model";

/*  Imports from Redux/easy-peasy:
  Easy Peasy is an abstraction of Redux
 */

const store = createStore<StoreModel>({
  selectedPage: 1,
  selectePage: (state: StoreModel, payload: number) => {
    state.selectedPage = payload;
  },
  searchText: "",
  search: (state: StoreModel, payload: string) => {
    state.searchText = payload;
  },
});

export default store;

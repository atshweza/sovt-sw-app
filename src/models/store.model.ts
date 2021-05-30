import { Action } from "easy-peasy";

export type StoreModel = {
  selectedPage: number;
  searchText: string;
  selectPage: Action<StoreModel, number>;
  search: Action<StoreModel, string>;
};

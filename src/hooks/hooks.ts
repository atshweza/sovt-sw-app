import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "../models/store.model";

const { useStoreActions, useStoreDispatch, useStore } =
  createTypedHooks<StoreModel>();

export { useStoreActions, useStoreDispatch, useStore };

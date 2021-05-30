import { createTypedHooks } from "easy-peasy";
import { StarWarsModel } from "../models/store.model";

const { useStoreActions, useStoreDispatch, useStore } =
  createTypedHooks<StarWarsModel>();

export { useStoreActions, useStoreDispatch, useStore };

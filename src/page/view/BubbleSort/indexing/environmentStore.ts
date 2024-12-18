import { create, StateCreator } from "zustand";
import { Receipt, State } from "../model/types";
import { actionSlice, EnvironmentAction } from "./actions";

export type EnvironmentData = {
  receipt: Receipt;
  state: State;
  step: number;
};
const defaultData: EnvironmentData = {
  // LATER: Refactor this out
  receipt: {
    initialState: {
      array: [],
    },
    commands: [],
  },
  state: {
    array: [],
  },
  step: 0,
};
/**
 * Provides data for `useEnvironmentStore`.
 */
const dataSlice: StateCreator<EnvironmentStore, [], [], EnvironmentData> = () =>
  defaultData;

export type EnvironmentStore = EnvironmentData & EnvironmentAction;

/**
 * 'Environment' contains ALL data that the indexer needs (except target step).
 * 
 * It usually contains but not limited to the following data.
 * - calculated receipt
 * - current state
 * - current step
 */
export const useEnvironmentStore = create<EnvironmentStore>()((...a) => ({
  ...dataSlice(...a),
  ...actionSlice(...a),
}));

import { create, StateCreator } from "zustand";
import { Receipt, State } from "../model/types";
import { actionSlice, EnvironmentAction } from "./actions";

export type EnvironmentData = {
  receipt: Receipt;
  state: State;
  step: number;
};
const defaultData: EnvironmentData = {
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
const dataSlice: StateCreator<EnvironmentStore, [], [], EnvironmentData> = () =>
  defaultData;

export type EnvironmentStore = EnvironmentData & EnvironmentAction;
export const useEnvironmentStore = create<EnvironmentStore>()((...a) => ({
  ...dataSlice(...a),
  ...actionSlice(...a),
}));

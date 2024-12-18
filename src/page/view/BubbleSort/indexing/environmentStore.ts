import { create, StateCreator } from "zustand";
import { Receipt, State } from "../model/types";
import { stubData } from "./_test";
import executeCommand from "../lib/executeCommand";
import unexecuteCommand from "../lib/unexecuteCommand";

export type EnvironmentData = {
  receipt: Receipt;
  state: State;
  step: number;
};
// const defaultData: EnvironmentData = {
//   receipt: {
//     initialState: {
//       array: [],
//     },
//     commands: [],
//   },
//   state: {
//     array: [],
//   },
//   step: 0,
// }
const defaultData = stubData;
const dataSlice: StateCreator<EnvironmentStore, [], [], EnvironmentData> = () =>
  defaultData;

export type EnvironmentAction = {
  initialize: (receipt: Receipt) => void;
  next: () => void;
  prev: () => void;
};
const actionSlice: StateCreator<EnvironmentStore, [], [], EnvironmentAction> = (
  set
) => ({
  initialize: (receipt: Receipt) => {
    set({ receipt, step: 0 });
  },
  next: () => {
    set((state) => ({
      state: executeCommand(state.state, state.receipt.commands[state.step]),
      step: state.step + 1,
    }));
  },
  prev: () => {
    set((state) => ({
      state: unexecuteCommand(
        state.state,
        state.receipt.commands[state.step - 1]
      ),
      step: state.step - 1,
    }));
  },
});

export type EnvironmentStore = EnvironmentData & EnvironmentAction;
export const useEnvironmentStore = create<EnvironmentStore>()((...a) => ({
  ...dataSlice(...a),
  ...actionSlice(...a),
}));

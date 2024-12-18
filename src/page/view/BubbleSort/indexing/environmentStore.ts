import { create, StateCreator } from "zustand";
import executeCommand from "../lib/executeCommand";
import { Receipt, State } from "../model/types";
import { stubData } from "./_test";
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

const nextRaw = (state: EnvironmentData) => ({
  state: executeCommand(state.state, state.receipt.commands[state.step]),
  step: state.step + 1,
});
const prevRaw = (state: EnvironmentData) => ({
  state: unexecuteCommand(state.state, state.receipt.commands[state.step - 1]),
  step: state.step - 1,
});

export type EnvironmentAction = {
  initialize: (receipt: Receipt) => void;
  next: () => void;
  prev: () => void;
  goto: (step: number) => void;
};
const actionSlice: StateCreator<EnvironmentStore, [], [], EnvironmentAction> = (
  set
) => ({
  initialize: (receipt: Receipt) => {
    set({ receipt, step: 0 });
  },
  next: () => set(nextRaw),
  prev: () => set(prevRaw),
  goto: (step: number) =>
    set((state) => {
      let ref = state;
      let remaining = step - ref.step;
      while (remaining > 0) {
        ref = { ...ref, ...nextRaw(ref) };
        remaining--;
      }
      while (remaining < 0) {
        ref = { ...ref, ...prevRaw(ref) };
        remaining++;
      }

      return ref;
    }),
});

export type EnvironmentStore = EnvironmentData & EnvironmentAction;
export const useEnvironmentStore = create<EnvironmentStore>()((...a) => ({
  ...dataSlice(...a),
  ...actionSlice(...a),
}));

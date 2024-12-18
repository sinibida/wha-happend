import { StateCreator } from "zustand";
import createReceipt from "../lib/createReceipt";
import executeCommand from "../lib/executeCommand";
import unexecuteCommand from "../lib/unexecuteCommand";
import { InitializeArgs } from "../model/types";
import { EnvironmentData, EnvironmentStore } from "./environmentStore";

export type EnvironmentAction = {
  next: () => void;
  prev: () => void;
  goto: (step: number) => void;
  initialize: (args: InitializeArgs) => void;
};

const nextRaw = (state: EnvironmentData) => ({
  state: executeCommand(state.state, state.receipt.commands[state.step]),
  step: state.step + 1,
});
const prevRaw = (state: EnvironmentData) => ({
  state: unexecuteCommand(state.state, state.receipt.commands[state.step - 1]),
  step: state.step - 1,
});

export const actionSlice: StateCreator<
  EnvironmentStore,
  [],
  [],
  EnvironmentAction
> = (set) => ({
  initialize: (args: InitializeArgs) => {
    const receipt = createReceipt(args);
    set({ receipt, state: receipt.initialState, step: 0 });
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

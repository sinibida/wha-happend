import { StateCreator } from "zustand";
import { EnvironmentStore } from "./environmentStore";
import { Receipt } from "./types";

export type EnvironmentAction<S, C> = {
  next: (executeCommand: CommandExecutor<S, C>) => void;
  prev: (coexecuteCommand: CommandExecutor<S, C>) => void;
  initialize: (receipt: Receipt<S, C>) => void;
};
export type CommandExecutor<S, C> = (state: S, command: C) => S;

/**
 * Provides actions for `useEnvironmentStore`.
 */
export const getActionSlice = <S, C>() => {
  const actionSlice: StateCreator<
    EnvironmentStore<S, C>,
    [],
    [],
    EnvironmentAction<S, C>
  > = (set) => ({
    initialize(receipt: Receipt<S, C>) {
      // const receipt = createReceipt(args);
      set({ receipt, state: receipt.initialState, step: 0 });
    },

    next(execute: CommandExecutor<S, C>) {
      set((state) => ({
        state: execute(state.state, state.receipt.commands[state.step]),
        step: state.step + 1,
      }));
    },
    prev(coexecute: CommandExecutor<S, C>) {
      set((state) => ({
        state: coexecute(state.state, state.receipt.commands[state.step - 1]),
        step: state.step - 1,
      }));
    },

    // goto => useIndexer
  });
  return actionSlice;
};

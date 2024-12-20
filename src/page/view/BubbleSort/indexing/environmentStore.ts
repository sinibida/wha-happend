import { create } from "zustand";
import { CommandExecutor, Receipt } from "./types";

export type EnvironmentData<S, C> = {
  receipt: Receipt<S, C>;
  state: S;
  step: number;
};

export type EnvironmentAction<S, C> = {
  next: (executeCommand: CommandExecutor<S, C>) => void;
  prev: (coexecuteCommand: CommandExecutor<S, C>) => void;
  initialize: (receipt: Receipt<S, C>) => void;
};

export type EnvironmentStore<S, C> = EnvironmentData<S, C> &
  EnvironmentAction<S, C>;

/**
 * 'Environment' contains ALL data that the indexer needs (except target step).
 *
 * It usually contains but not limited to the following data.
 * - calculated receipt
 * - current state
 * - current step
 */
export const createEnvironmentStore = <S, C>(
  defaultData: EnvironmentData<S, C>
) =>
  create<EnvironmentStore<S, C>>()((set) => ({
    // Data

    ...defaultData,

    // Actions

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
  }));

import { create } from "zustand";
import { CommandExecutor, IndexerReceipt } from "./types";

export type EnvironmentData<S, C> = {
  receipt: IndexerReceipt<S, C>;
  state: S;
  step: number;
};

export type EnvironmentAction<S, C> = {
  next: (executeCommand: CommandExecutor<S, C>) => void;
  prev: (coexecuteCommand: CommandExecutor<S, C>) => void;
  initialize: (receipt: IndexerReceipt<S, C>) => void;
};

export type EnvironmentStore<S, C> = EnvironmentData<S, C> &
  EnvironmentAction<S, C>;

export type CreateEnvironmentStoreArgs<S, C> = {
  initialState: S;
  commandType: C;
};

/**
 * 'Environment' contains ALL data that the indexer needs (except target step).
 *
 * It usually contains but not limited to the following data.
 * - calculated receipt
 * - current state
 * - current step
 * 
 * @example
    const initialState: State = {
      array: [],
    };
    
    export const useEnvironmentStore = createEnvironmentStore({
      initialState,
      commandType: {} as Command,
    });
 */
export const createEnvironmentStore = <S, C>({
  initialState,
}: CreateEnvironmentStoreArgs<S, C>) =>
  create<EnvironmentStore<S, C>>()((set) => ({
    // Data

    receipt: {
      initialState,
      commands: [],
    },
    state: initialState,
    step: 0,

    // Actions

    initialize(receipt: IndexerReceipt<S, C>) {
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

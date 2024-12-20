import { EnvironmentStore } from "./environmentStore";
import { CommandExecutor, Receipt } from "./types";

export type UseIndexerReturn<S, C> = {
  // Data
  state: S;
  lastCommand?: C;
  step: number;
  /**
   * Maximum(INCLUSIVE) value of `step`.
   */
  maxStep: number;

  // Actions
  goto(newStep: number): void;
  initialize: (receipt: Receipt<S, C>) => void;
};

/**
 * Indexer provides functions and selectors for the ui to use.
 * @param environmentStore environment store object. (see `createEnvironmentStore`)
 * @param execute          function that executes the command onto the state and returns it.
 * @param coexecute        function that *reverts* the command onto the state and returns it.
 */
export default function useIndexer<S, C>(
  environmentStore: EnvironmentStore<S, C>,
  execute: CommandExecutor<S, C>,
  coexecute: CommandExecutor<S, C>
): UseIndexerReturn<S, C> {
  const { state, receipt, step, initialize, next, prev } = environmentStore;
  const lastCommand = step === 0 ? undefined : receipt.commands[step - 1];
  const maxStep = receipt.commands.length;
  const goto = (newStep: number) => {
    let remaining = newStep - step;
    while (remaining > 0) {
      next(execute);
      remaining--;
    }
    while (remaining < 0) {
      prev(coexecute);
      remaining++;
    }
  };

  return {
    state,
    lastCommand,
    step,
    maxStep,
    goto,
    initialize,
  };
}

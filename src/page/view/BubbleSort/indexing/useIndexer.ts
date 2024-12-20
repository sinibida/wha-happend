import { CommandExecutor } from "./actions";
import { createEnvironmentStore } from "./environmentStore";
import { Receipt } from "./types";

type Data<S, C> = {
  state: S;
  lastCommand?: C;
  step: number;
  /**
   * Maximum(INCLUSIVE) value of `step`.
   */
  maxStep: number;
};

type Action<S, C> = {
  goto(newStep: number): void;
  initialize: (receipt: Receipt<S, C>) => void;
};

export type UseIndexerReturn<S, C> = Data<S, C> & Action<S, C>;

// TODO: rename to useIndexer
/**
 * Indexer provides functions and selectors for the ui to use.
 */
export default function useIndexer<S, C>(
  useEnvironmentStore: ReturnType<typeof createEnvironmentStore<S, C>>,
  execute: CommandExecutor<S, C>,
  coexecute: CommandExecutor<S, C>
): UseIndexerReturn<S, C> {
  const { state, receipt, step, initialize, next, prev } =
    useEnvironmentStore();
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

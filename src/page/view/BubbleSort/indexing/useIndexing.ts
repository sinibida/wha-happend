import { Command } from "../model/command";
import { InitializeArgs, State } from "../model/types";
import { useEnvironmentStore } from "./environmentStore";

type Data = {
  state: State;
  lastCommand?: Command;
  step: number;
  /**
   * Maximum(INCLUSIVE) value of `step`.
   */
  maxStep: number;
};

type Action = {
  goto(newStep: number): void;
  initialize: (args: InitializeArgs) => void;
};

export type useIndexingReturn = Data & Action;

// TODO: rename to useIndexer
/**
 * Indexer provides functions and selectors for the ui to use.
 */
export default function useIndexing(): useIndexingReturn {
  const { state, receipt, step, goto, initialize } = useEnvironmentStore();
  const lastCommand = step === 0 ? undefined : receipt.commands[step - 1];
  const maxStep = receipt.commands.length;

  return {
    state,
    lastCommand,
    step,
    maxStep,
    goto,
    initialize,
  };
}

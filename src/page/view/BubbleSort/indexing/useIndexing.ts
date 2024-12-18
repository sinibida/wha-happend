import { State } from "../model/types";
import { Command } from "../model/command";
import { useEnvironmentStore } from "./environmentStore";

type Data = {
  state: State;
  lastCommand?: Command;
  step: number;
};

type Action = {
  stepTo(newStep: number): void;
};

export type useIndexingReturn = Data & Action;

export default function useIndexing(): useIndexingReturn {
  const { state, receipt, step, next, prev } = useEnvironmentStore();
  const lastCommand = step === 0 ? undefined : receipt.commands[step - 1];

  const stepTo = (newStep: number) => {
    // STUB
    if (newStep === step + 1) next();
    else if (newStep === step - 1) prev();
    else throw new Error("Unimplemented");
  };

  return {
    state,
    lastCommand,
    step,
    stepTo,
  };
}

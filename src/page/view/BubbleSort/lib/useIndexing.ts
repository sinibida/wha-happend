import { Command, State } from "../model";

type Data = {
  state: State;
  lastCommand: Command;
  step: number;
};

type Action = {
  stepTo(step: number): void;
};

export type useIndexingReturn = Data & Action;

// STUB
export default function useIndexing(): useIndexingReturn {
  const stepTo = () => {
    console.log('TODO: stepTo')
  };

  return {
    state: {
      array: [5, 2, 3, 4, 1],
    },
    lastCommand: {
      type: "swap",
      payload: {
        indexA: 1,
        indexB: 2,
      },
    },
    step: 0,
    stepTo,
  };
}

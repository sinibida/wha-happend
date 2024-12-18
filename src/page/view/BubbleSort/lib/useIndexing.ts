import { Command, State } from "../model";
import { EnvironmentStore } from "../model/environmentStore";

type Data = {
  state: State;
  lastCommand?: Command;
  step: number;
};

type Action = {
  stepTo(step: number): void;
};

export type useIndexingReturn = Data & Action;

function stepStoreTo(store: EnvironmentStore, step: number): Data {
  console.log("TODO: stepStoreTo", step);
  return {
    state: store.state,
    lastCommand: undefined,
    step,
  };
}

// STUB
export default function useIndexing(): useIndexingReturn {
  const stepTo = (step: number) => {
    // TODO setState
    stepStoreTo(
      {
        receipt: {
          commands: [],
          initialState: {
            array: [],
          },
        },
        state: {
          array: [],
        },
        step: 0,
      },
      step
    );
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

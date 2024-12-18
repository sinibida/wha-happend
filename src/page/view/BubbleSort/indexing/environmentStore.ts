import { create, StateCreator } from "zustand";
import { Command, Receipt, State } from "../model";
import { produce } from "immer";
import { stubData } from "./_test";

export type EnvironmentData = {
  receipt: Receipt;
  state: State;
  step: number;
};
// const defaultData: EnvironmentData = {
//   receipt: {
//     initialState: {
//       array: [],
//     },
//     commands: [],
//   },
//   state: {
//     array: [],
//   },
//   step: 0,
// }
const defaultData = stubData;
const dataSlice: StateCreator<EnvironmentStore, [], [], EnvironmentData> = () =>
  defaultData;

function executeCommand(state: State, command: Command): State {
  switch (command.type) {
    case "swap": {
      const { indexA: a, indexB: b } = command.payload;
      return produce<State>((draft) => {
        const temp = draft.array[a];
        draft.array[a] = draft.array[b];
        draft.array[b] = temp;
      })(state);
    }
    default:
      throw new Error("Unimplented");
  }
}

export type EnvironmentAction = {
  initialize: (receipt: Receipt) => void;
  next: () => void;
};
const actionSlice: StateCreator<EnvironmentStore, [], [], EnvironmentAction> = (
  set
) => ({
  initialize: (receipt: Receipt) => {
    set({ receipt, step: 0 });
  },
  next: () => {
    set((state) => ({
      state: executeCommand(state.state, state.receipt.commands[state.step]),
      step: state.step + 1,
    }));
  },
});

export type EnvironmentStore = EnvironmentData & EnvironmentAction;
export const useEnvironmentStore = create<EnvironmentStore>()((...a) => ({
  ...dataSlice(...a),
  ...actionSlice(...a),
}));

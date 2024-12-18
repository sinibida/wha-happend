import { produce } from "immer";
import { State } from "../model/types";
import { Command } from "../model/command";

export default function unexecuteCommand(state: State, command: Command): State {
  switch (command.type) {
    case "swap": {
      const { indexA: a, indexB: b } = command.payload;
      return produce<State>((draft) => {
        const temp = draft.array[a];
        draft.array[a] = draft.array[b];
        draft.array[b] = temp;
      })(state);
    }
    case "compare":
      return state;
    default:
      throw new Error("Unimplented");
  }
}

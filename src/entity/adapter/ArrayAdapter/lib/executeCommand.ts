import { produce } from "immer";
import { Command } from "./command";

export default function executeCommand<T>(state: T[], command: Command): T[] {
  switch (command.type) {
    case "swap": {
      const { indexA: a, indexB: b } = command.payload;
      return produce<T[]>((draft) => {
        const temp = draft[a];
        draft[a] = draft[b];
        draft[b] = temp;
      })(state);
    }
    case "compare":
      return state;
    default:
      throw new Error("Unimplented");
  }
}

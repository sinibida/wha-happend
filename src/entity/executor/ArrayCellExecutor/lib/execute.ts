import { produce } from "immer";
import { Command } from "../model/command";
import { State } from "../model/store";

function swap(state: State, a: number, b: number) {
  return produce<State>((draft) => {
    // TODO use binary search
    const aObj = draft.array.find((x) => x.index === a)!;
    const bObj = draft.array.find((x) => x.index === b)!;
    const temp = aObj.index;
    aObj.index = bObj.index;
    bObj.index = temp;
    draft.array.sort((x) => x.index);
  })(state);
}

function executeCommand(state: State, command: Command): State {
  switch (command.type) {
    case "swap": {
      const { indexA: a, indexB: b } = command.payload;
      return swap(state, a, b);
    }
    case "compare":
    case "done":
      return state;
    default:
      throw new Error("Unimplented");
  }
}

function unexecuteCommand(state: State, command: Command): State {
  switch (command.type) {
    case "swap": {
      const { indexA: a, indexB: b } = command.payload;
      return swap(state, a, b);
    }
    case "compare":
    case "done":
      return state;
    default:
      throw new Error("Unimplented");
  }
}

const arrayCellExecutor = {
  executeCommand,
  unexecuteCommand,
};

export default arrayCellExecutor;

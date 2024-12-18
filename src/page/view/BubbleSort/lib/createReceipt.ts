import { Command } from "../model/command";
import { InitializeArgs, Receipt } from "../model/types";

export default function createReceipt(args: InitializeArgs): Receipt {
  const commands: Command[] = [];
  const draft = [...args.array];

  const compare = (i: number, j: number) => {
    commands.push({
      type: "compare",
      message: `compare item ${i} and ${j}`,
      payload: {
        indexA: i,
        indexB: j,
      },
    });
    return draft[i] - draft[j];
  };

  const swap = (i: number, j: number) => {
    const temp = draft[i];
    draft[i] = draft[j];
    draft[j] = temp;
    commands.push({
      type: "swap",
      message: `swap item ${i} and ${j}`,
      payload: {
        indexA: i,
        indexB: j,
      },
    });
  };

  for (let i = 0; i < draft.length - 1; i++) {
    for (let j = 0; j < draft.length - 1 - i; j++) {
      if (compare(j, j + 1) > 0) {
        swap(j, j + 1);
      }
    }
  }

  commands.push({
    type: "done",
    message: "DONE!",
    payload: {},
  });

  return {
    commands,
    initialState: { array: args.array },
  };
}

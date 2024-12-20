import { Command } from "../model/command";
import { InitializeArgs, Receipt } from "../model/types";

// TODO: Use i18n on messages
export default function createReceipt(args: InitializeArgs): Receipt {
  const commands: Command[] = [];
  const draft = [...args.array];

  const compare = (i: number, j: number) => {
    commands.push({
      type: "compare",
      message: `Assert if ${draft[i]} > ${draft[j]} (arr[${i}] > arr[${j}])`,
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
      message: `Swap item ${i} and ${j}`,
      payload: {
        indexA: i,
        indexB: j,
      },
    });
  };

  for (let i = 1; i < draft.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (compare(j, j + 1) > 0) {
        swap(j, j + 1);
      } else {
        break;
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

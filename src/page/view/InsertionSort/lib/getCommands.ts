import { ArrayAdapter } from "@/entity/adapter/ArrayAdapter";
import { Command } from "../model/command";

export default function getCommands(array: number[]): Command[] {
  const commands: Command[] = [];
  const draft = [...array];

  const arr = new ArrayAdapter(draft, (x) => commands.push(x));

  for (let i = 1; i < draft.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr.compare(j, j + 1) > 0) {
        arr.swap(j, j + 1);
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

  return commands;
}

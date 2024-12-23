import { ArrayAdapter } from "@/entity/adapter/ArrayAdapter";
import { Command } from "../model/command";

export default function getCommands(array: number[]): Command[] {
  const commands: Command[] = [];
  const draft = [...array];

  const arr = new ArrayAdapter(draft, (x) => commands.push(x));

  for (let i = 0; i < draft.length - 1; i++) {
    for (let j = 0; j < draft.length - 1 - i; j++) {
      if (arr.compare(j, j + 1) > 0) {
        arr.swap(j, j + 1);
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

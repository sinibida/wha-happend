import { IndexerReceipt } from "@/hooks/useIndexer";
import { State } from "../model/store";
import getCommands from "./getCommands";
import { Command } from "../model/command";
import getUUID from "@/shared/snippet/getUUID";

export const createReceipt = (array: number[]) =>
  ({
    initialState: {
      array: array.map((x, i) => ({
        id: getUUID(),
        index: i,
        value: x,
      })),
    },
    commands: getCommands(array),
  } satisfies IndexerReceipt<State, Command>);

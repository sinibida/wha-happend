import { IndexerReceipt } from "@/hooks/useIndexer";
import { State } from "../model/store";
import getCommands from "./getCommands";
import { Command } from "../model/command";

export const createReceipt = (array: number[]) =>
  ({
    initialState: {
      array,
    },
    commands: getCommands(array),
  } satisfies IndexerReceipt<State, Command>);

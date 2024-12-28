import { fromArray } from "@/entity/cell/ArrayCell";
import { IndexerReceipt } from "@/hooks/useIndexer";
import { Command } from "../model/command";
import { State } from "../model/store";
import getCommands from "./getCommands";

export const createReceipt = (array: number[]) =>
  ({
    initialState: { array: fromArray(array) },
    commands: getCommands(array),
  } satisfies IndexerReceipt<State, Command>);

import { fromArray } from "@/entity/cell/ArrayCell";
import arrayCellExecutor from "@/entity/executor/ArrayCellExecutor";
import useIndexer, { IndexerReceipt } from "@/hooks/useIndexer";
import { Command } from "../model/command";
import { State, useEnvironmentStore } from "../model/store";
import getCommands from "./getCommands";

const executor = arrayCellExecutor;

const createReceipt = (array: number[]) =>
  ({
    initialState: { array: fromArray(array) },
    commands: getCommands(array),
  } satisfies IndexerReceipt<State, Command>);

export default function useBubbleSort() {
  const environmentStore = useEnvironmentStore();

  const indexer = useIndexer(
    environmentStore,
    executor.executeCommand,
    executor.unexecuteCommand
  );

  const initializeWith = (array: number[]) =>
    indexer.initialize(createReceipt(array));

  return {
    ...indexer,
    initializeWith: initializeWith,
  };
}

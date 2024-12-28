import {
  ArrayCellExecutorState,
  newArrayCellExecutorState,
} from "@/entity/executor/ArrayCellExecutor";
import { createEnvironmentStore } from "@/hooks/useIndexer";
import { Command } from "./command";

/**
 * The state that gets changed by algorithm.
 */
export type State = ArrayCellExecutorState & {
  // i: number;
  // j: number;
};

const initialState: State = {
  ...newArrayCellExecutorState(),
  // i: 0,
  // j: 0,
};

export const useEnvironmentStore = createEnvironmentStore({
  initialState,
  commandType: {} as Command,
});

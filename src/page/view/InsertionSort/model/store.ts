import { createEnvironmentStore } from "@/hooks/useIndexer";
import { Command } from "./command";

/**
 * The state that gets changed by algorithm.
 */
export type State = {
  array: number[];
  // LATER: add i & j here
};

const initialState: State = {
  array: [],
};

export const useEnvironmentStore = createEnvironmentStore({
  initialState,
  commandType: {} as Command,
});

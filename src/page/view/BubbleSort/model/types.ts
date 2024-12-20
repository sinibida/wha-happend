import { Command } from "./command";

/**
 * The state that gets changed by algorithm.
 */
export type State = {
  array: number[];
  // LATER: add i & j here
};

/**
 * Argument for creating `Receipt`.
 */
export type InitializeArgs = {
  array: number[];
};

/**
 * The result of simulated algorithm.
 * The indexer uses this data only and do not interferes with the algorithm itself.
 */
export type Receipt = _Receipt<State, Command>;

type _Receipt<State, Command> = {
  initialState: State;
  commands: Command[];
};

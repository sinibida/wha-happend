import { Command } from "./command";

export type State = {
  array: number[];
};

export type Receipt = {
  initialState: State;
  commands: Command[];
};

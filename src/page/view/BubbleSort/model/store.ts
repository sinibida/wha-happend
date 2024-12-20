import {
  createEnvironmentStore,
  EnvironmentData,
} from "../indexing/environmentStore";
import { Command } from "./command";
import { State } from "./types";

const defaultData: EnvironmentData<State, Command> = {
  // LATER: Refactor this out
  receipt: {
    initialState: {
      array: [],
    },
    commands: [],
  },
  state: {
    array: [],
  },
  step: 0,
};

export const useEnvironmentStore = createEnvironmentStore(defaultData);

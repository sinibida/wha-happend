import { Receipt, State } from ".";

type Data = {
  receipt: Receipt;
  state: State;
  step: number;
};

type Action = unknown;

export type EnvironmentStore = Data & Action;

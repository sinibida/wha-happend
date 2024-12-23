export type IndexerReceipt<S, C> = {
  initialState: S;
  commands: C[];
};
export type CommandExecutor<S, C> = (state: S, command: C) => S;

export type Receipt<State, Command> = {
  initialState: State;
  commands: Command[];
};

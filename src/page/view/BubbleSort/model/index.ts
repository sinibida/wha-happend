export type State = {
  array: number[]
}

export type Receipt = {
  initialState: State;
  commands: Command[];
}

export type Command = SwapCommand;

type SwapCommand = {
  type: 'swap',
  payload: {
    indexA: number,
    indexB: number,
  }
}

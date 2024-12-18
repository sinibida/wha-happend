export type State = {
  array: number[]
}

export type Command = SwapCommand;

type SwapCommand = {
  type: 'swap',
  payload: {
    indexA: number,
    indexB: number,
  }
}

export type Command = SwapCommand;

export type SwapCommand = {
  type: 'swap',
  payload: {
    indexA: number,
    indexB: number,
  }
}

export type Command = SwapCommand | CompareCommand | DoneCommand;

export type SwapCommand = {
  type: "swap";
  message: string;
  payload: {
    indexA: number;
    indexB: number;
  };
};

export type CompareCommand = {
  type: "compare";
  message: string;
  payload: {
    indexA: number;
    indexB: number;
  };
};

export type DoneCommand = {
  type: "done";
  message: string;
  payload: object;
};

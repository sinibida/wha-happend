export type Command = SwapCommand | CompareCommand;

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

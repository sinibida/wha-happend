export type ArrayCommand = ArraySwapCommand | ArrayCompareCommand;

export type ArraySwapCommand = {
  type: "swap";
  message: string;
  payload: {
    indexA: number;
    indexB: number;
  };
};

export type ArrayCompareCommand = {
  type: "compare";
  message: string;
  payload: {
    indexA: number;
    indexB: number;
  };
};

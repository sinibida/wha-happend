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

const types: unknown[] = ["swap", "compare"];
export function isArrayCommand(obj: object): obj is ArrayCommand {
  return "type" in obj && types.includes(obj.type);
}

export type Command = SwapCommand | CompareCommand;

type SwapCommand = {
  type: "swap";
  message: string;
  payload: {
    indexA: number;
    indexB: number;
  };
};

type CompareCommand = {
  type: "compare";
  message: string;
  payload: {
    indexA: number;
    indexB: number;
  };
};

const types: unknown[] = ["swap", "compare"];
export function isCommand(obj: object): obj is Command {
  return "type" in obj && types.includes(obj.type);
}
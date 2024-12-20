export type BaseCommand = DoneCommand;

export type DoneCommand = {
  type: "done";
  message: string;
  payload: object;
};

const types: unknown[] = ["done"];
export function isArrayCommand(obj: object): obj is BaseCommand {
  return "type" in obj && types.includes(obj.type);
}

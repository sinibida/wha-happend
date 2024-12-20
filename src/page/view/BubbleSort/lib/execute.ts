import {
  executeArrayCommand,
  isArrayCommand,
  unexecuteArrayCommand,
} from "@/entity/adapter/ArrayAdapter";
import { Command } from "../model/command";
import { State } from "../model/store";

export function executeCommand(state: State, command: Command): State {
  if (isArrayCommand(command)) {
    return {
      ...state,
      array: executeArrayCommand(state.array, command),
    };
  }

  return state;
}

export function unexecuteCommand(state: State, command: Command): State {
  if (isArrayCommand(command)) {
    return {
      ...state,
      array: unexecuteArrayCommand(state.array, command),
    };
  }

  return state;
}

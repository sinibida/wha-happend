import { ArrayCell } from "@/entity/cell/ArrayCell";

/**
 * The state that gets changed by algorithm.
 */
export type State = {
  array: ArrayCell<number>[];
  // LATER: Generix Support
};

export function getInitialState(): State {
  return {
    array: [],
  };
}

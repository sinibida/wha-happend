import { Command } from "./command";

// TODO: Use i18n on messages
export default class Adapter<T> {
  data: T[];
  logFn: (cmd: Command) => void;

  constructor(data: T[], logFn: (cmd: Command) => void) {
    this.data = data;
    this.logFn = logFn;
  }

  compare(i: number, j: number) {
    this.logFn({
      type: "compare",
      message: `Assert if ${this.data[i]} > ${this.data[j]} (arr[${i}] > arr[${j}])`,
      payload: {
        indexA: i,
        indexB: j,
      },
    });

    // @ts-expect-error If type do not support comparasion, then throw error.
    return this.data[i] - this.data[j];
  }

  swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
    
    this.logFn({
      type: "swap",
      message: `Swap item ${i} and ${j}`,
      payload: {
        indexA: i,
        indexB: j,
      },
    });
  }
}

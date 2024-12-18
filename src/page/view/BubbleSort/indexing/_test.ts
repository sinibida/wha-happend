import { Receipt } from "../model";
import { EnvironmentData } from "./environmentStore";

// STUB
const stubReceipt: Receipt = {
  initialState: { array: [1, 3, 5, 2, 4] },
  commands: [
    {
      type: 'swap',
      payload: {
        indexA: 2,
        indexB: 3,
      }
    },
    {
      type: 'swap',
      payload: {
        indexA: 3,
        indexB: 4,
      }
    },
    {
      type: 'swap',
      payload: {
        indexA: 1,
        indexB: 2,
      }
    },
  ],
}
export const stubData: EnvironmentData = {
  receipt: stubReceipt,
  state: stubReceipt.initialState,
  step: 0,
};

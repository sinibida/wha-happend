import { create } from "zustand";
import { EnvironmentAction, getActionSlice } from "./actions";
import { Receipt } from "./types";

export type EnvironmentData<S, C> = {
  receipt: Receipt<S, C>;
  state: S;
  step: number;
};

export type EnvironmentStore<S, C> = EnvironmentData<S, C> &
  EnvironmentAction<S, C>;

/**
 * 'Environment' contains ALL data that the indexer needs (except target step).
 *
 * It usually contains but not limited to the following data.
 * - calculated receipt
 * - current state
 * - current step
 */
export const createEnvironmentStore = <S, C>(
  defaultData: EnvironmentData<S, C>
) =>
  create<EnvironmentStore<S, C>>()((...a) => ({
    ...defaultData,
    ...getActionSlice<S, C>()(...a),
  }));

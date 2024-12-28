import getUUID from "@/shared/snippet/getUUID";

export type ArrayCell<T> = {
  id: string;
  index: number;
  value: T;
};

export function newArrayCell<T>({
  index,
  value,
}: {
  index: number;
  value: T;
}): ArrayCell<T> {
  return {
    id: getUUID(),
    index,
    value,
  };
}

export function fromArray<T>(array: T[]): ArrayCell<T>[] {
  return array.map((value, index) => newArrayCell({ index, value }));
}

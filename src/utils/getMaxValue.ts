import { max } from "ramda";

const getMaxValue = (list: number[]): number => list.reduce(max, 0);

export default getMaxValue;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("get the max number in an array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(getMaxValue(arr)).toBe(5);
  });
}

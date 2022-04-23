import { min } from "ramda";

const getMinValue = (list: number[]): number => list.reduce(min, list[0]);

export default getMinValue;
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("get the max number in an array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(getMinValue(arr)).toBe(1);
  });
}

import { min } from "ramda";

const getMinValue = (list: number[]): number => list.reduce(min, list[0]);

export default getMinValue;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  test.each([
    [[-1, -2, -3, -4, -5], -5],

    [[1, 2, 3, 4, 5], 1],

    [[1, 2, 3, 4, -5, 100, 300], -5],
  ])("The array %s min should be %d", (array, result) => {
    expect(getMinValue(array)).toBe(result);
  });
}

import { max } from "ramda";

const getMaxValue = (list: number[]): number => list.reduce(max, list[0]);

export default getMaxValue;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  test.each([
    [[-1, -2, -3, -4, -5], -1],

    [[1, 2, 3, 4, 5], 5],

    [[1, 2, 3, 4, -5, 100, 300], 300],
  ])("The array %s max should be %d", (array, result) => {
    expect(getMaxValue(array)).toBe(result);
  });
}

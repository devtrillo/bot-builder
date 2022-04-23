import { act, renderHook } from "@testing-library/react";

import useToggle from "./useToggle";

test.each([
  [false, true],
  [true, false],
])("The useToggle hooks starting in %o", async (start, end) => {
  const { result } = renderHook(() => useToggle(start));
  expect(result.current[0]).toBe(start);
  expect(typeof result.current[1]).toBe("function");
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(end);
});

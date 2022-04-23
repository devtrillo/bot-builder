export const PRODUCT_NAME = "Bot builder";

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test.each([["PRODUCT_NAME", PRODUCT_NAME]])(
    "The variable %s should not change",
    (name, value) => {
      expect(typeof name).toBe("string");
      expect(value).toMatchSnapshot();
    }
  );
}

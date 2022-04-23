export const PRODUCT_NAME = "Bot builder";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("should not change any of the variables", () => {
    expect(PRODUCT_NAME).toMatchSnapshot();
  });
}

import { findUniq } from "./findUniq";

describe("Test findUniq function", () => {
  const array = [0, 0, 0.55, 0, 0];
  it("should return 0.55 for add(10,5)", () => {
    expect(findUniq(array)).toBe(0.55);
    expect(typeof findUniq(array)).toBe("number");
  });
});

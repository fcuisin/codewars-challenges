import { rot13 } from "./rot13";

describe("Test findUniq function", () => {
  it("should return ebg13 for rot13", () => {
    expect(rot13("rot13")).toBe("ebg13");
    expect(typeof rot13("rot13")).toBe("string");
  });
});

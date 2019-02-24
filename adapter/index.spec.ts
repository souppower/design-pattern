import { Adapter } from "./adapter";

describe("Adapter", () => {
  test("Adapter provides a new interface", () => {
    const adapter = new Adapter();
    const cost = adapter.getCost();
    expect(cost).toBe(100);
  });
});

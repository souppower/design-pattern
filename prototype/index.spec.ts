import { Sheep } from "./index";

describe("Prototype", () => {
  test("Clonened object equals the original", () => {
    const original = new Sheep("A");
    const cloned = original.clone();

    expect(cloned).toEqual(original);
  });

  test("Attributes can be set when cloning the original", () => {
    const original = new Sheep("A");
    const attributes = { name: "B" };
    const cloned = original.clone(attributes);
    const expected = { ...original, ...attributes };

    expect(cloned).toEqual(expected);
  });
});

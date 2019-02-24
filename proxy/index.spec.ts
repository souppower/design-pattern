import { Child } from "./proxy";

describe("Proxy", () => {
  test("Kids can get you a toy", () => {
    const child = new Child();
    const model = "stuffed animal";
    const toy = child.getToy(model);

    expect(toy.name).toBe(model);
  });

  test("Kids can also get you a car", () => {
    const child = new Child();
    const model = "BMW";
    const car = child.getCar(model);

    expect(car.model).toBe(model);
  });
});

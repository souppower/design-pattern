import { FlyweightFactory } from "./flyweight";

describe("Flyweight", () => {
  test("Flyweight Factory uses cached values if it already has one", () => {
    const factory = new FlyweightFactory();
    const key = "test-key";
    const firstValue = factory.getValue(key);
    const secondValue = factory.getValue(key);

    expect(firstValue).toEqual(secondValue);
  });
});

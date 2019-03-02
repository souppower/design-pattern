import { ConcreteStrategy, Context } from "./strategy";

describe("Strategy", () => {
  test("Context delegates the strategy implementation to Strategy", () => {
    const ctx = new Context(new ConcreteStrategy());
    ctx.strategy.execute();
  });
});

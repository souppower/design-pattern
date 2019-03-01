import { Abstraction, ConcreteImplementor, RefinedAbstraction } from "./bridge";

describe("Bridge", () => {
  test("Abstraction gets its job done using the supplied instance", () => {
    const impl = new ConcreteImplementor();
    const abstraction = new Abstraction(impl);
    const title = abstraction.getTitle();

    expect(title).toBe("Title");
  });

  test("RefinedAbstraction gets its job done using the supplied instance", () => {
    const impl = new ConcreteImplementor();
    const abstraction = new RefinedAbstraction(impl);
    const summary = abstraction.getSummary();

    expect(summary).toBe("Summary");
  });
});

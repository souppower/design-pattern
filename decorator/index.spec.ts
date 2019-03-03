import { ConcreteComponent, ConcreteDecorator } from "./decorator";

describe("Decorator", () => {
  test("Component is decoratable", () => {
    const component = new ConcreteComponent();
    const decorator = new ConcreteDecorator(component);
    expect(decorator.getPrice()).toBe(300);
  });
});

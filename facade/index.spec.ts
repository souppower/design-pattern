import { Facade } from "./facade";

describe("Facade", () => {
  test("Facade offers you an abstraction layer", () => {
    const facade = new Facade();
    const res = facade.run();

    expect(res).toBe(true);
  });
});

import { Constructor, RobotBuilder } from "./builder";

describe("Builder", () => {
  test("Constructor does its construction using the supplied builder", () => {
    const builder = new RobotBuilder();
    const constructor = new Constructor(builder);
    constructor.construct();
  });
});

import { Human } from "./template_method";

describe("Template Method", () => {
  test("Human life", () => {
    const human = new Human();
    human.survive();
  });
});

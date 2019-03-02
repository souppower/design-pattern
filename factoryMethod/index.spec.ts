import { CatFactory, DogFactory, Dog, Cat } from "./factoryMethod";

describe("Factory Method", () => {
  test("Dog factory can create a dog instance", () => {
    const factory = new DogFactory();
    const name = "pocky";
    const dog = factory.create(name);

    expect(dog instanceof Dog).toBe(true);
  });

  test("Cat factory can create a cat instance", () => {
    const factory = new CatFactory();
    const name = "choco";
    const cat = factory.create(name);

    expect(cat instanceof Cat).toBe(true);
  });
});

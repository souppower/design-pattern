import {
  MakeRepositoryFactory,
  UserRepository,
  PostsRepository
} from "./abstractFactory";

describe("Abstract Factory", () => {
  test("MakeRepositoryFactory can create a user repository factory", () => {
    const factory = MakeRepositoryFactory("user");
    const product = factory.create();

    expect(product instanceof UserRepository).toBe(true);
  });

  test("MakeRepositoryFactory can create a posts repository factory", () => {
    const factory = MakeRepositoryFactory("posts");
    const product = factory.create();

    expect(product instanceof PostsRepository).toBe(true);
  });

  test("MakeRepositoryFactory throws error if it receives an unknown type", () => {
    expect(() => MakeRepositoryFactory("unknown" as any)).toThrow();
  });
});

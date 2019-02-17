import Singleton from "./index";

describe("Singleton", () => {
  test("Class is instantiated only once", () => {
    const instanceA = Singleton.getInstance();
    const instanceB = Singleton.getInstance();

    expect(instanceA).toEqual(instanceB);
  });
});

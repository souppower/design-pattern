import { Jumping, Running, Shooting } from "./state";

describe("State", () => {
  describe("Jumping", () => {
    test("Pressing A while jumping makes the player shoot", () => {
      const state = new Jumping();
      const newState = state.onPressA();
      expect(newState instanceof Shooting).toBe(true);
    });

    test("Pressing B while jumping does nothing", () => {
      const state = new Jumping();
      const newState = state.onPressB();
      expect(newState).toBe(null);
    });
  });

  describe("Running", () => {
    test("Pressing A while running makes the player shoot", () => {
      const state = new Running();
      const newState = state.onPressA();
      expect(newState instanceof Shooting).toBe(true);
    });

    test("Pressing B while running makes the player jump", () => {
      const state = new Running();
      const newState = state.onPressB();
      expect(newState instanceof Jumping).toBe(true);
    });
  });

  describe("Shooting", () => {
    test("Pressing A while shooting makes the player keep shooting", () => {
      const state = new Shooting();
      const newState = state.onPressA();
      expect(newState instanceof Shooting).toBe(true);
    });

    test("Pressing B while shooting makes the player jump", () => {
      const state = new Shooting();
      const newState = state.onPressB();
      expect(newState instanceof Jumping).toBe(true);
    });
  });
});

import {
  AppRequest,
  FirstHandler,
  SecondHandler
} from "./chainOfResponsibility";

describe("ChainOfResponsibility", () => {
  describe("Single Handler", () => {
    test("When request was handled, it returns true", () => {
      const firstHandler = new FirstHandler();
      const req = makeRequest(1);

      expect(firstHandler.handle(req)).toBe(true);
    });

    test("When request was not handled, it throws", () => {
      const firstHandler = new FirstHandler();
      const req = makeRequest(2);

      expect(() => firstHandler.handle(req)).toThrow();
    });
  });

  describe("Multiple Handlers", () => {
    test("Request handling will be delegated to the next handler", () => {
      const firstHandler = new FirstHandler();
      const secondHandler = new SecondHandler();
      firstHandler.setNext(secondHandler);
      const req = makeRequest(2);

      expect(firstHandler.handle(req)).toBe(true);
    });

    test("Unhandled request throws", () => {
      const firstHandler = new FirstHandler();
      const secondHandler = new SecondHandler();
      firstHandler.setNext(secondHandler);
      const req = makeRequest(3);

      expect(() => firstHandler.handle(req)).toThrow();
    });
  });
});

const makeRequest = (id: number): AppRequest => ({ id });

import { MoneyMemento } from "./memento";
import Originator from "./originator";

describe("Memento", () => {
  test("Memento object is creatable", () => {
    const money = 100;
    const memento = new MoneyMemento(money);
    expect(memento.money).toBe(money);
  });

  describe("Originator", () => {
    test("Memento can be restored", () => {
      const originalMoney = 100;
      const originator = new Originator(originalMoney);
      const memento = originator.createMemento();

      originator.play();
      originator.restoreMemento(memento);

      expect(originator.getMoney()).toBe(originalMoney);
    });
  });
});

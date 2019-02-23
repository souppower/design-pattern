import { ConcreteObserver, Observer } from "./observer";
import { Subject } from "./subject";

describe("Observer", () => {
  describe("Observer", () => {
    test("observer can be notified", () => {
      const observer = new ConcreteObserver();
      observer.onNotify();
    });
  });

  describe("Subject", () => {
    test("Observers can be added to the subject", () => {
      const subject = new Subject();
      const o = new ConcreteObserver();
      subject.addObserver(o);

      expect(subject.observers).toHaveLength(1);
    });

    test("Observers can be deleted from the subject", () => {
      const subject = new Subject();
      const o = new ConcreteObserver();
      subject.addObserver(o);
      subject.removeObservers();

      expect(subject.observers).toHaveLength(0);
    });

    test("Subject can notify events to observers", () => {
      const subject = new Subject();
      const o = new ConcreteObserver();
      subject.addObserver(o);
      subject.addObserver(o);

      subject.notify();
    });
  });
});

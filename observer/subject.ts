import { Observer } from "./observer";

interface Observable {
  addObserver(observer: Observer): void;

  removeObservers(): void;

  notify(): void;
}

export class Subject implements Observable {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObservers() {
    this.observers = [];
  }

  notify() {
    this.observers.forEach(o => o.onNotify());
  }
}

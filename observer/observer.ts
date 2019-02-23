export interface Observer {
  onNotify(): void;
}

export class ConcreteObserver implements Observer {
  onNotify() {}
}

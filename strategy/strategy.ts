export interface Strategy {
  execute(): void;
}

export class ConcreteStrategy implements Strategy {
  execute() {}
}

export class Context {
  strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
}

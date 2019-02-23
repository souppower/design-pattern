import { Memento, MoneyMemento } from "./memento";

export default class Originator {
  private money: number;

  constructor(money: number) {
    this.money = money;
  }

  getMoney() {
    return this.money;
  }

  play() {
    this.money = Math.floor(Math.random() * 1000);
  }

  createMemento() {
    const memento = new MoneyMemento(this.money);
    return memento;
  }

  restoreMemento(memento: Memento) {
    this.money = memento.money;
  }
}

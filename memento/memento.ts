export interface Memento {
  money: number;
}

export class MoneyMemento implements Memento {
  money: number;

  constructor(money: number) {
    this.money = money;
  }
}

class Adaptee {
  getPrice() {
    return 100;
  }
}

export class Adapter {
  getCost() {
    const adaptee = new Adaptee();
    return adaptee.getPrice();
  }
}

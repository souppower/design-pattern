class Car {
  model: string;

  constructor(model: string) {
    this.model = model;
  }
}

class Toy {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Parent {
  buyCar(model: string) {
    return new Car(model);
  }
}

export class Child {
  car: Car | null;

  constructor() {
    this.car = null;
  }

  getToy(name: string) {
    return new Toy(name);
  }

  getCar(model: string) {
    const parent = new Parent();
    return parent.buyCar(model);
  }
}

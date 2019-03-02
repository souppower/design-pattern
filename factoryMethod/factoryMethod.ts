interface Animal {
  name: string;
}

export class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface AnimalFactory {
  create(name: string): Animal;
}

export class DogFactory implements AnimalFactory {
  create(name: string) {
    return new Dog(name);
  }
}

export class CatFactory implements AnimalFactory {
  create(name: string) {
    return new Cat(name);
  }
}

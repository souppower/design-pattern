interface Cloneable {
  clone(): any;
}

interface Animal extends Cloneable {
  name: string;
}

export class Sheep implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  clone(attributes?: { name: string }) {
    const name = attributes ? attributes.name : this.name;
    return new Sheep(name);
  }
}

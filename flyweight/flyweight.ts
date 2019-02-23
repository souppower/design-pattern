class ValueGenerator {
  generate() {
    return Math.floor(Math.random() * 100);
  }
}

export class FlyweightFactory {
  pool: { [key: string]: number };

  constructor() {
    this.pool = {};
  }

  getValue(key: string): number {
    let value = this.pool[key];
    if (!value) {
      value = new ValueGenerator().generate();
      this.pool[key] = value;
    }

    return value;
  }
}

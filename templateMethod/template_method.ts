abstract class Animal {
  survive() {
    this.wakeUp();
    this.eat();
    this.sleep();
  }

  abstract wakeUp(): void;

  abstract eat(): void;

  abstract sleep(): void;
}

export class Human extends Animal {
  wakeUp() {}

  eat() {}

  sleep() {}
}

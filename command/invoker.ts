import { Command } from "./command";

interface Invoker {
  turnOn(): void;

  turnOff(): void;

  turnUp(): void;

  turnDown(): void;
}

export class RemoterController implements Invoker {
  on: Command;
  off: Command;
  up: Command;
  down: Command;

  constructor(on: Command, off: Command, up: Command, down: Command) {
    this.on = on;
    this.off = off;
    this.up = up;
    this.down = down;
  }

  turnOn(): void {
    this.on.execute();
  }

  turnOff(): void {
    this.off.execute();
  }

  turnUp(): void {
    this.up.execute();
  }

  turnDown(): void {
    this.down.execute();
  }
}

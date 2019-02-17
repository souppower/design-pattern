import { AirConditioner } from "./device";

export interface Command {
  execute(): void;
  unexecute(): void;
}

export class OnCommand implements Command {
  private device: AirConditioner;

  constructor(device: AirConditioner) {
    this.device = device;
  }

  execute() {
    this.device.on();
  }

  unexecute(): void {
    this.device.off();
  }
}

export class OffCommand implements Command {
  private device: AirConditioner;

  constructor(device: AirConditioner) {
    this.device = device;
  }

  execute() {
    this.device.off();
  }

  unexecute(): void {
    this.device.on();
  }
}

export class UpCommand implements Command {
  private device: AirConditioner;

  constructor(device: AirConditioner) {
    this.device = device;
  }

  execute() {
    this.device.turnUp();
  }

  unexecute(): void {
    this.device.turnDown();
  }
}

export class DownCommand implements Command {
  private device: AirConditioner;

  constructor(device: AirConditioner) {
    this.device = device;
  }

  execute() {
    this.device.turnDown();
  }

  unexecute(): void {
    this.device.turnUp();
  }
}

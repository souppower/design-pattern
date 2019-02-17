export interface AirConditioner {
  on(): void;
  off(): void;
  turnUp(): void;
  turnDown(): void;
}

export class BasicAirConditioner implements AirConditioner {
  isActive: boolean;
  temperature: number;

  constructor(temperature: number = 20) {
    this.isActive = false;
    this.temperature = temperature;
  }

  on() {
    this.isActive = true;
  }

  off() {
    this.isActive = false;
  }

  turnUp() {
    this.temperature = this.temperature + 1;
  }

  turnDown() {
    this.temperature = this.temperature - 1;
  }
}

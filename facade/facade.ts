export class Facade {
  private runner: Runner;

  constructor() {
    this.runner = new Runner();
  }

  run() {
    this.runner.start();
    this.runner.log();
    this.runner.end();

    return true;
  }
}

class Runner {
  start() {}

  log() {}

  end() {}
}

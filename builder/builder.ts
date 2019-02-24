export interface Builder {
  makeParts(): void;

  assemble(): void;
}

export class RobotBuilder implements Builder {
  assemble() {}

  makeParts() {}
}

export class Constructor {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  construct() {
    this.builder.makeParts();
    this.builder.assemble();
  }
}

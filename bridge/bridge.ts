interface Implementor {
  fetchTitle(): void;

  fetchSummary(): string;
}

export class ConcreteImplementor implements Implementor {
  fetchTitle() {
    return "Title";
  }

  fetchSummary() {
    return "Summary";
  }
}

export class Abstraction {
  media: Implementor;

  constructor(media: Implementor) {
    this.media = media;
  }

  getTitle() {
    return this.media.fetchTitle();
  }
}

export class RefinedAbstraction extends Abstraction {
  getSummary() {
    return this.media.fetchSummary();
  }
}

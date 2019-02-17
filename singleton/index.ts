class Singleton {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Container {
  private instance: Singleton | null;
  constructor() {
    this.instance = null;
  }

  getInstance() {
    if (!this.instance) {
      const id = Math.random();
      this.instance = new Singleton(id);
      return this.instance;
    }

    return this.instance;
  }
}

export default new Container();

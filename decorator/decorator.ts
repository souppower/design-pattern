abstract class Component {
  abstract getPrice(): number;
}

export class ConcreteComponent extends Component {
  getPrice() {
    return 100;
  }
}

export abstract class Decorator extends Component {
  protected constructor(public component: Component) {
    super();
  }
}

export class ConcreteDecorator extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  getPrice() {
    return 200 + this.component.getPrice();
  }
}

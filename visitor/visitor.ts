export interface Visitor {
  visit(acceptor: Acceptor): void;
}

interface Acceptor {
  accept(visitor: Visitor): void;
}

export class Employee implements Acceptor {
  constructor(public salary: number) {}

  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

export class Employees implements Acceptor {
  constructor(public employees: Employee[]) {}

  accept(visitor: Visitor): void {
    this.employees.forEach(e => e.accept(visitor));
  }
}

export class ConcreteVisitor implements Visitor {
  visit(acceptor: Employee) {
    acceptor.salary += 1000;
  }
}

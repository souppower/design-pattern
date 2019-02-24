export class ListIterator {
  index: number;
  private readonly list: number[];

  constructor() {
    this.list = [];
    this.index = 0;
  }

  hasNext() {
    return this.list[this.index] ? true : false;
  }

  next() {
    const item = this.list[this.index];
    if (!item) {
      return null;
    }

    this.index = this.index + 1;
    return item;
  }

  addItem(item: number) {
    this.list.push(item);
  }
}

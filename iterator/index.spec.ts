import { ListIterator } from "./iterator";

describe("Iterator", () => {
  describe("hasNext", () => {
    test("hasNext returns true if iterator has remaining items", () => {
      const iterator = new ListIterator();
      iterator.addItem(1);
      const hasNext = iterator.hasNext();
      expect(hasNext).toBe(true);
    });

    test("hasNext returns false if iterator reached the end", () => {
      const iterator = new ListIterator();
      const hasNext = iterator.hasNext();
      expect(hasNext).toBe(false);
    });
  });

  describe("Next", () => {
    test("next returns current item and advances the index", () => {
      const iterator = new ListIterator();
      const item = 1;
      iterator.addItem(item);
      const current = iterator.next();

      expect(current).toBe(item);
      expect(iterator.index).toBe(1);
    });

    test("next returns null and doesn't advance the index when iterator points the end", () => {
      const iterator = new ListIterator();
      const current = iterator.next();

      expect(current).toBe(null);
      expect(iterator.index).toBe(0);
    });
  });

  describe("iterator in action", () => {
    const iterator = new ListIterator();
    const one = 1;
    const two = 2;
    const three = 3;
    iterator.addItem(one);
    iterator.addItem(two);
    iterator.addItem(three);

    test("iterator is iterable", () => {
      const res = [];
      while (iterator.hasNext()) {
        const item = iterator.next();
        res.push(item);
      }

      expect(res).toEqual([one, two, three]);
    });
  });
});

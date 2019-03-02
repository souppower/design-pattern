abstract class Entry {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract add(entry: Entry): void;

  abstract print(): void;
}

export class FileItem extends Entry {
  print() {
    return `/${this.name}`;
  }

  add(entry: Entry) {
    throw new Error("You cannot add anything to a file");
  }
}

export class Directory extends Entry {
  list: Entry[];

  constructor(name: string) {
    super(name);
    this.list = [];
  }

  add(entry: Entry) {
    this.list.push(entry);
  }

  print() {
    const formattedDirectoryName = `/${this.name}`;
    if (this.list.length === 0) {
      return formattedDirectoryName;
    }

    return this.list
      .map(entry => `${formattedDirectoryName}${entry.print()}`)
      .join("\n");
  }
}

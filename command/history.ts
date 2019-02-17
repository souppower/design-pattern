import { Command } from "./command";

interface History {
  add(command: Command): void;
  undo(): void;
  clear(): void;
}

export class CommandHistory implements History {
  commands: Command[];

  constructor() {
    this.commands = [];
  }

  add(command: Command): void {
    this.commands.push(command);
  }

  undo(): void {
    if (this.commands.length === 0) {
      return;
    }

    const lastCommand = this.commands[this.commands.length - 1];
    lastCommand.unexecute();
    this.commands.pop();
  }

  clear(): void {
    this.commands = [];
  }
}

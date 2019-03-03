abstract class Handler {
  private next: Handler | null;

  constructor() {
    this.next = null;
  }

  handle(request: AppRequest): boolean {
    const isHandled = this.resolve(request);
    if (isHandled) {
      return true;
    }

    if (!this.next) {
      throw new Error(`Unable to handle request. ID: ${request.id}`);
    }

    return this.next.handle(request);
  }

  setNext(handler: Handler) {
    this.next = handler;
  }

  abstract resolve(request: AppRequest): boolean;
}

export interface AppRequest {
  id: number;
}

export class FirstHandler extends Handler {
  resolve(request: AppRequest): boolean {
    if (request.id !== 1) {
      return false;
    }

    return true;
  }
}

export class SecondHandler extends Handler {
  resolve(request: AppRequest): boolean {
    if (request.id !== 2) {
      return false;
    }

    return true;
  }
}

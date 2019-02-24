export class Jumping {
  onPressA() {
    return new Shooting();
  }

  onPressB() {
    return null;
  }
}

export class Running {
  onPressA() {
    return new Shooting();
  }

  onPressB() {
    return new Jumping();
  }
}

export class Shooting {
  onPressA() {
    return new Shooting();
  }

  onPressB() {
    return new Jumping();
  }
}

class Party {
  constructor(public nowPlaying: DJ) {}
}

export class Organizer {
  party: Party;

  constructor() {
    const dj = new BadDJ(this);
    this.party = new Party(dj);
  }

  changeDJ(newDJ: DJ) {
    this.party.nowPlaying = newDJ;
  }

  djPlayed(isGood: boolean) {
    if (!isGood) {
      const dj = new GoodDJ(this);
      this.changeDJ(dj);
    }
  }
}

abstract class DJ {
  protected constructor(organizer: Organizer) {}

  abstract play(): void;
}

export class GoodDJ extends DJ {
  constructor(private organizer: Organizer) {
    super(organizer);
  }

  play() {
    this.organizer.djPlayed(true);
  }
}

export class BadDJ extends DJ {
  constructor(private organizer: Organizer) {
    super(organizer);
  }

  play() {
    this.organizer.djPlayed(false);
  }
}

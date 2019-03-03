import { BadDJ, GoodDJ, Organizer } from "./mediator";

describe("Mediator", () => {
  test("Organizer doesn't do anything if the dj is doing ok", () => {
    const organizer = new Organizer();
    const badDJ = new BadDJ(organizer);

    expect(organizer.party.nowPlaying).toEqual(badDJ);
    organizer.djPlayed(true);
    expect(organizer.party.nowPlaying).toEqual(badDJ);
  });

  test("Organizer changes the dj if they are not good", () => {
    const organizer = new Organizer();
    const goodDJ = new GoodDJ(organizer);
    const badDJ = new BadDJ(organizer);

    expect(organizer.party.nowPlaying).toEqual(badDJ);
    organizer.djPlayed(false);
    expect(organizer.party.nowPlaying).toEqual(goodDJ);
  });
});

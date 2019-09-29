import { jsonResponseStub } from '../../stubs/data/json-response.stub';
import { Winner } from 'src/app/components/winner/models/winner.model';
import { ChampionListPipe } from './champion-list.pipe';
import { Champion } from 'src/app/components/champion/models/champion.model';

describe('championListPipe', () => {
    it('create an instance', () => {
      const pipe = new ChampionListPipe();
      expect(pipe).toBeTruthy();
    });

    it('should format jsonResponseData to return an array of champions', () => {
      const pipe = new ChampionListPipe();
      const expected = pipe.transform(jsonResponseStub);
      const actual: Array<Champion> = [{
        season: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].season,
        round: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].round,
        position: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position,
        points: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points,
        driver: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
      }];
      expect(expected).toEqual(actual);
    });
  });

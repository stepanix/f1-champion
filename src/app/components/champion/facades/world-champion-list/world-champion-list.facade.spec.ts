import { WorldChampionListFacade } from './world-champion-list.facade';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { Champion } from '../../models/champion.model';


describe('WorldChampionListFacade', () => {

    it('should format jsonResponseData to return an array of world champions', () => {
      const pipe = new WorldChampionListFacade();
      const expected = pipe.parse(jsonResponseStub);
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

import { WinnerListPipe } from './winner-list.pipe';
import { jsonResponseStub } from '../../stubs/data/json-response.stub';
import { Winner } from 'src/app/components/winner/models/winner.model';

describe('winnerListPipe', () => {
    it('create an instance', () => {
      const pipe = new WinnerListPipe();
      expect(pipe).toBeTruthy();
    });

    it('should format jsonResponseData to return an array of winners', () => {
      const pipe = new WinnerListPipe();
      const expected = pipe.transform(jsonResponseStub);
      const actual: Array<Winner> = [{
        raceName: jsonResponseStub.MRData.RaceTable.Races[0].raceName,
        laps: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].laps,
        points: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].points,
        driver: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].Driver,
        time: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].Time.time
      }];
      expect(expected).toEqual(actual);
    });
  });

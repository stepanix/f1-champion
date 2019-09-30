import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { Winner } from '../../models/winner.model';
import { WinnerListFacade } from './winner-list.facade';


describe('WinnerListFacade', () => {

  it('should format jsonResponseData to return an array of winners', () => {
    const facade = new WinnerListFacade();
    const expected = facade.parse(jsonResponseStub);
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

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WinnerListFacade } from './winner-list.facade';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { Winner } from '../../models/winner.model';

describe('WinnerListFacade', () => {
  let facade: WinnerListFacade;
  // let service: any;

  // service = jasmine.createSpyObj('service', ['get']);
  // service.get.and.returnValue(of(jsonResponseStub));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // { provide: WinnerApiService, useValue: service },
        WinnerListFacade
      ],
      imports: [HttpClientModule]
    });
    facade = TestBed.get(WinnerListFacade);
  });

  it('should call parseWinnersList and return a list of winners', () => {
    // spyOn(facade, 'listWinners').and.callThrough();
    // facade.parseWinnersList('2005', '12345').subscribe(res => {
    //   expect(res).toEqual(winnerStub);
    // });
    // expect(facade).toBeDefined();
    // expect(service).toBeDefined();
    // expect(facade.listWinners).toHaveBeenCalled();
    const expected = facade.parseWinnersList(jsonResponseStub);
    const actual: Array<Winner> = [{
      raceName: jsonResponseStub.MRData.RaceTable.Races[0].raceName,
      laps: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].laps,
      points: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].points,
      driver: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].Driver,
      time: jsonResponseStub.MRData.RaceTable.Races[0].Results[0].Time.time
    }];
    expect(facade).toBeDefined();
    expect(expected).toEqual(actual);
  });
});

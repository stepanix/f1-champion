import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WorldChampionFacade } from './world-champion.facade';
import { of } from 'rxjs/internal/observable/of';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { championStub } from 'src/app/shared/stubs/data/champion.stub';
import { Champion } from '../../models/champion.model';


describe('WorldChampionFacade', () => {
  let facade: WorldChampionFacade;
  // let service: any;

  // service = jasmine.createSpyObj('service', ['get']);
  // service.get.and.returnValue(of(jsonResponseStub));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // { provide: WorldChampionApiService, useValue: service },
        WorldChampionFacade
      ],
      imports: [HttpClientModule]
    });
    facade = TestBed.get(WorldChampionFacade);
    // service = TestBed.get(WorldChampionApiService);
  });

  it('should call listChampions and return an Observable list of champions', () => {
    const expected = facade.parseChampionList(jsonResponseStub);
    const actual: Array<Champion> = [{
      season: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].season,
      round: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].round,
      position: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position,
      points: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points,
      driver: jsonResponseStub.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
    }];
    expect(facade).toBeDefined();
    expect(expected).toEqual(actual);
  });
});

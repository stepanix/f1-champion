import { TestBed, getTestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { WorldChampionApiService } from './world-champion.api.service';
import { environment } from 'src/environments/environment';
import { JsonResponse } from 'src/app/core/models/json-response.model';

describe('WorldChampionApiService', () => {
  let service: WorldChampionApiService;
  let httpMock: HttpTestingController;

  const MOCK_JSON_RESPONSE: JsonResponse = {
    MRData: {
      xmlns: 'http://ergast.com/mrd/1.4',
      series: 'f1',
      url: 'http://ergast.com/api/f1/driverstandings/1.json',
      limit: '11',
      offset: '55',
      total: '69',
      StandingsTable: {
        driverStandings: '1',
        StandingsLists: []
      },
      RaceTable: {
        season: '',
        position: '',
        Races: []
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [WorldChampionApiService],
      imports: [HttpClientTestingModule]
    });
    service = getTestBed().get(WorldChampionApiService);
    httpMock = getTestBed().get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable response object of JsonResponse', () => {
    expect(service).toBeDefined();

    service.get().subscribe(res => {
      expect(res.MRData).toEqual(MOCK_JSON_RESPONSE.MRData);
    });
    const endPoint = environment.baseUrl + `driverStandings/1.json?limit=11&offset=55`;
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_JSON_RESPONSE);
  });
});

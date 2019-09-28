import { TestBed, getTestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { JsonResponse } from 'src/app/core/models/json-response.model';
import { WinnerApiService } from './winner.api.service';

describe('WinnerApiService', () => {
  let service: WinnerApiService;
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
        driverStandings: '',
        StandingsLists: []
      },
      RaceTable: {
        season: '2005',
        position: '1',
        Races: []
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [WinnerApiService],
      imports: [HttpClientTestingModule]
    });
    service = getTestBed().get(WinnerApiService);
    httpMock = getTestBed().get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable response object of JsonResponse', () => {
    expect(service).toBeDefined();

    service.get('2005').subscribe(res => {
      expect(res.MRData).toEqual(MOCK_JSON_RESPONSE.MRData);
    });
    const endPoint = environment.baseUrl + `2005/results/1.json`;
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_JSON_RESPONSE);
  });
});

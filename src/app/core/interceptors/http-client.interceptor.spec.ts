import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { WorldChampionApiService } from 'src/app/components/champion/services/apis/world-champion.api.service';
import { HttpClientInterceptor } from './http-client.interceptor';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs/internal/observable/throwError';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';

describe(`HttpClientInterceptor`, () => {
  let service: WorldChampionApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WorldChampionApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpClientInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(WorldChampionApiService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an Accept header', () => {
    service.get().subscribe(response => {
      expect(response).toBeTruthy();
    });
    const endPoint = environment.baseUrl + `driverStandings/1.json?limit=11&offset=55`;
    const req = httpMock.expectOne(endPoint);
    expect(req.request.headers.has('Accept')).toEqual(true);
  });
});

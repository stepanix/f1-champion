import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { WorldChampionListApiService } from 'src/app/components/champion/services/apis/world-champion-list.api.service';
import { HttpClientInterceptor } from './http-client.interceptor';
import { environment } from 'src/environments/environment';


describe(`HttpClientInterceptor`, () => {
  let service: WorldChampionListApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WorldChampionListApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpClientInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(WorldChampionListApiService);
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

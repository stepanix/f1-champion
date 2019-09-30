import { TestBed, getTestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { WinnerListApiService } from './winner-list.api.service';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';

describe('WinnerApiService', () => {
  let service: WinnerListApiService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [WinnerListApiService],
      imports: [HttpClientTestingModule]
    });
    service = getTestBed().get(WinnerListApiService);
    httpMock = getTestBed().get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable response object of JsonResponse', () => {
    expect(service).toBeDefined();

    service.get('2005').subscribe(res => {
      expect(res.MRData).toEqual(jsonResponseStub.MRData);
    });
    const endPoint = environment.baseUrl + `2005/results/1.json`;
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(jsonResponseStub);
  });
});

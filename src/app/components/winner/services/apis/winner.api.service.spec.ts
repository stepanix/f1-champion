import { TestBed, getTestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { JsonResponse } from 'src/app/core/models/json-response.model';
import { WinnerApiService } from './winner.api.service';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';

describe('WinnerApiService', () => {
  let service: WinnerApiService;
  let httpMock: HttpTestingController;

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
      expect(res.MRData).toEqual(jsonResponseStub.MRData);
    });
    const endPoint = environment.baseUrl + `2005/results/1.json`;
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(jsonResponseStub);
  });
});

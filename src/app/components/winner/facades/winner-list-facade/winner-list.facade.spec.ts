import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { WinnerListFacade } from './winner-list.facade';
import { WinnerApiService } from '../../services/apis/winner.api.service';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { winnerStub } from 'src/app/shared/stubs/data/winner.stub';

describe('WinnerListFacade', () => {
  let facade: any;
  let service: any;

  service = jasmine.createSpyObj('service', ['get']);
  service.get.and.returnValue(of(jsonResponseStub));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: WinnerApiService, useValue: service },
        WinnerListFacade
      ],
      imports: [HttpClientModule]
    });
    facade = TestBed.get(WinnerListFacade);
  });

  it('should call listWinners and return an Observable list of winners', () => {
    spyOn(facade, 'listWinners').and.callThrough();
    facade.listWinners('2005', '12345').subscribe(res => {
      expect(res).toEqual(winnerStub);
    });
    expect(facade).toBeDefined();
    expect(service).toBeDefined();
    expect(facade.listWinners).toHaveBeenCalled();
  });
});

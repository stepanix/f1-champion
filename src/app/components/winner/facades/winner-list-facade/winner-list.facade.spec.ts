import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { WinnerListFacade } from './winner-list.facade';
import { Winner } from '../../models/winner.model';
import { WinnerApiService } from '../../services/apis/winner.api.service';

describe('WinnerListFacade', () => {
  let facade: WinnerListFacade;

  const MOCK_WINNERS: Array<Winner> = [
      {
        raceName: 'Mock Race',
        driver: {
          driverId: '12345',
          permanentNumber: '1',
          code: '001',
          url: 'url',
          givenName: 'lastName',
          familyName: 'firstName',
          dateOfBirth: '01/01/2019',
          nationality: 'earth'
        },
        points: '10',
        time: '1.27',
        laps: '20'
      }
    ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinnerListFacade, WinnerApiService],
      imports: [HttpClientModule]
    });
    facade = TestBed.get(WinnerListFacade);
  });

  it('should call listWinners and return an Observable list of winners', () => {
    spyOn(facade, 'listWinners').and.returnValue(of(MOCK_WINNERS));
    facade.listWinners('2005', '12345').subscribe(res => {
      expect(res).toEqual(MOCK_WINNERS);
    });
    expect(facade).toBeDefined();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { WorldChampionFacade } from './world-champion.facade';
import { of } from 'rxjs/internal/observable/of';
import { Champion } from '../../models/champion.model';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';

describe('WorldChampionFacade', () => {
  let facade: WorldChampionFacade;

  const MOCK_CHAMPIONS: Array<Champion> = [
    {
      season: '2005',
      round: '1',
      position: '1',
      points: '10',
      driver: {
        driverId: '12345',
        permanentNumber: '1',
        code: '001',
        url: 'url',
        givenName: 'lastName',
        familyName: 'firstName',
        dateOfBirth: '01/01/2019',
        nationality: 'earth'
      }
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldChampionFacade, WorldChampionApiService],
      imports: [HttpClientModule]
    });
    facade = TestBed.get(WorldChampionFacade);
  });

  it('should call listChampions and return an Observable list of champions', () => {
    spyOn(facade, 'listChampions').and.returnValue(of(MOCK_CHAMPIONS));
    facade.listChampions().subscribe(res => {
      expect(res).toEqual(MOCK_CHAMPIONS);
    });
    expect(facade).toBeDefined();
  });
});

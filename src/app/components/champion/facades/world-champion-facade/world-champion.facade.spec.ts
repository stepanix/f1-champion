import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WorldChampionFacade } from './world-champion.facade';
import { of } from 'rxjs/internal/observable/of';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { championStub } from 'src/app/shared/stubs/data/champion.stub';


describe('WorldChampionFacade', () => {
  let facade: any;
  let service: any;

  service = jasmine.createSpyObj('service', ['get']);
  service.get.and.returnValue(of(jsonResponseStub));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: WorldChampionApiService, useValue: service },
        WorldChampionFacade
      ],
      imports: [HttpClientModule]
    });
    facade = TestBed.get(WorldChampionFacade);
    service = TestBed.get(WorldChampionApiService);
  });

  it('should call listChampions and return an Observable list of champions', () => {
    spyOn(facade, 'listChampions').and.callThrough();
    facade.listChampions().subscribe(res => {
      expect(res).toEqual(championStub);
    });
    expect(facade).toBeDefined();
    expect(service).toBeDefined();
    expect(facade.listChampions).toHaveBeenCalled();
  });
});

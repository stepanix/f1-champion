import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldChampionListComponent } from './world-champion-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ChampionListPipe } from 'src/app/shared/pipes/champion/champion-list.pipe';

describe('WorldChampionListComponent', () => {
  let component: WorldChampionListComponent;
  let fixture: ComponentFixture<WorldChampionListComponent>;
  let service: WorldChampionApiService;
  let pipe: ChampionListPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [WorldChampionListComponent],
      providers: [ChampionListPipe, WorldChampionApiService],
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldChampionListComponent);
    service = TestBed.get(WorldChampionApiService);
    pipe = TestBed.get(ChampionListPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize variables', () => {
    component.initVariables();
    expect(component.champions.length).toEqual(0);
    expect(component.errorObject).toEqual(null);
  });

  it('should call reloadService', () => {
    spyOn(component, 'listChampions').and.callThrough();
    component.reloadService();
    expect(component.listChampions).toHaveBeenCalled();
  });

  it('should call listChampions and invoke parseWinnersList when successful', () => {
    spyOn(service, 'get').and.returnValue(of(jsonResponseStub));
    spyOn(pipe, 'transform').and.callThrough();
    component.listChampions();
    expect(component.champions.length).toBeGreaterThan(0);
    expect(service.get).toHaveBeenCalled();
  });

  it('should call listChampions and throw an error', () => {
    spyOn(service, 'get').and.returnValue(throwError('error'));
    component.listChampions();
    expect(component.errorObject).toBeDefined();
  });
});

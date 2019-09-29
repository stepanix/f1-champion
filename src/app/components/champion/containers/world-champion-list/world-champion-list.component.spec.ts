import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldChampionListComponent } from './world-champion-list.component';
import { WorldChampionFacade } from '../../facades/world-champion-facade/world-champion.facade';
import { RouterTestingModule } from '@angular/router/testing';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WorldChampionListComponent', () => {
  let component: WorldChampionListComponent;
  let fixture: ComponentFixture<WorldChampionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [WorldChampionListComponent],
      providers: [WorldChampionFacade, WorldChampionApiService],
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldChampionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

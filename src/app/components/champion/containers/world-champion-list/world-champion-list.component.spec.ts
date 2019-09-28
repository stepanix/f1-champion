import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldChampionListComponent } from './world-champion-list.component';
import { WorldChampionFacade } from '../../facades/world-champion-facade/world-champion.facade';
import { DriverNamePipeModule } from 'src/app/shared/pipes/driver/driver-pipe.module';
import { RouterTestingModule } from '@angular/router/testing';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WorldChampionListComponent', () => {
  let component: WorldChampionListComponent;
  let fixture: ComponentFixture<WorldChampionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorldChampionListComponent],
      providers: [WorldChampionFacade, WorldChampionApiService],
      imports: [DriverNamePipeModule, RouterTestingModule, HttpClientTestingModule]
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

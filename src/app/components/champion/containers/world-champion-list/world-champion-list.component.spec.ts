import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldChampionListComponent } from './world-champion-list.component';

describe('WorldChampionListComponent', () => {
  let component: WorldChampionListComponent;
  let fixture: ComponentFixture<WorldChampionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldChampionListComponent ]
    })
    .compileComponents();
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

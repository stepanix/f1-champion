import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerListComponent } from './winner-list.component';
import { DriverNamePipeModule } from 'src/app/shared/pipes/driver/driver-pipe.module';
import { ActivatedRoute } from '@angular/router';
import { WinnerListFacade } from '../../facades/winner-list-facade/winner-list.facade';
import { RouterTestingModule } from '@angular/router/testing';
import { WinnerApiService } from '../../services/apis/winner.api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WinnerListComponent', () => {
  let component: WinnerListComponent;
  let fixture: ComponentFixture<WinnerListComponent>;

  const fakeRouter = {
    snapshot: {
      params: {
        season: '2005',
        driverId: '12345'
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WinnerListComponent],
      imports: [DriverNamePipeModule, RouterTestingModule, HttpClientTestingModule],
      providers: [WinnerListFacade, WinnerApiService, { provide: ActivatedRoute, useValue: fakeRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

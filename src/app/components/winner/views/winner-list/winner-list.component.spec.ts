import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerListComponent } from './winner-list.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WinnerListApiService } from '../../services/apis/winner-list.api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { throwError } from 'rxjs/internal/observable/throwError';
import { WinnerListFacade } from '../../facades/winner-list/winner-list.facade';

describe('WinnerListComponent', () => {
  let component: WinnerListComponent;
  let fixture: ComponentFixture<WinnerListComponent>;
  let service: WinnerListApiService;
  let facade: WinnerListFacade;

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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
      providers: [WinnerListFacade,  WinnerListApiService, { provide: ActivatedRoute, useValue: fakeRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerListComponent);
    service = TestBed.get(WinnerListApiService);
    facade = TestBed.get(WinnerListFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize variables', () => {
    component.initVariables();
    expect(component.winners.length).toEqual(0);
    expect(component.errorObject).toEqual(null);
  });

  it('should call reloadService', () => {
    spyOn(component, 'listWinners').and.callThrough();
    component.reloadService();
    expect(component.listWinners).toHaveBeenCalled();
  });

  it('should call listWinners and invoke parseWinnersList when successful', () => {
    spyOn(service, 'get').and.returnValue(of(jsonResponseStub));
    spyOn(facade, 'parse').and.callThrough();
    component.listWinners();
    expect(component.winners.length).toBeGreaterThan(0);
    expect(service.get).toHaveBeenCalled();
  });

  it('should call listWinners and throw an error', () => {
    spyOn(service, 'get').and.returnValue(throwError('error'));
    component.listWinners();
    expect(component.errorObject).toBeDefined();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerListComponent } from './winner-list.component';
import { ActivatedRoute } from '@angular/router';
import { WinnerListFacade } from '../../facades/winner-list-facade/winner-list.facade';
import { RouterTestingModule } from '@angular/router/testing';
import { WinnerApiService } from '../../services/apis/winner.api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { jsonResponseStub } from 'src/app/shared/stubs/data/json-response.stub';
import { throwError } from 'rxjs/internal/observable/throwError';

describe('WinnerListComponent', () => {
  let component: WinnerListComponent;
  let fixture: ComponentFixture<WinnerListComponent>;
  let service: WinnerApiService;
  let facade: WinnerListFacade;

  // service = jasmine.createSpyObj('service', ['get']);
  // service.get.and.returnValue(of(jsonResponseStub));

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
      providers: [WinnerListFacade,  WinnerApiService, { provide: ActivatedRoute, useValue: fakeRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerListComponent);
    service = TestBed.get(WinnerApiService);
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
    spyOn(facade, 'parseWinnersList').and.callThrough();
    component.listWinners();
    expect(facade.parseWinnersList).toHaveBeenCalled();
    expect(service.get).toHaveBeenCalled();
  });

  it('should call listWinners and throw an error', () => {
    spyOn(service, 'get').and.returnValue(throwError('error'));
    component.listWinners();
    console.log('errorTest', component.errorObject);
    expect(component.errorObject).toBeDefined();
  });
});

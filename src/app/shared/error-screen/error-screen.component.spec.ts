import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorScreenComponent } from './error-screen.component';

describe('ErrorScreenComponent', () => {
  let component: ErrorScreenComponent;
  let fixture: ComponentFixture<ErrorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onRetryClicked', () => {
    spyOn(component, 'onRetryClicked').and.callThrough();
    component.onRetryClicked();
    expect(component.onRetryClicked).toHaveBeenCalled();
  });
});

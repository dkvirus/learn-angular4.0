import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithBootstrapComponent } from './reactive-form-with-bootstrap.component';

describe('ReactiveFormWithBootstrapComponent', () => {
  let component: ReactiveFormWithBootstrapComponent;
  let fixture: ComponentFixture<ReactiveFormWithBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormWithBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormWithBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

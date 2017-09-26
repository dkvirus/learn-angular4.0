import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userage2Component } from './userage2.component';

describe('Userage2Component', () => {
  let component: Userage2Component;
  let fixture: ComponentFixture<Userage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

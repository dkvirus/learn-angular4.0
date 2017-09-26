import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userage4Component } from './userage4.component';

describe('Userage4Component', () => {
  let component: Userage4Component;
  let fixture: ComponentFixture<Userage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

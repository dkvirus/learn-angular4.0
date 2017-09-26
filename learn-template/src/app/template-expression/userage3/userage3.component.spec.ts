import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userage3Component } from './userage3.component';

describe('Userage3Component', () => {
  let component: Userage3Component;
  let fixture: ComponentFixture<Userage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

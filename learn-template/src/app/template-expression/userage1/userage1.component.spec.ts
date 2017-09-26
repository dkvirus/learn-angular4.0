import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userage1Component } from './userage1.component';

describe('Userage1Component', () => {
  let component: Userage1Component;
  let fixture: ComponentFixture<Userage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

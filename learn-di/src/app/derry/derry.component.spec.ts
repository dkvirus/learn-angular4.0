import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerryComponent } from './derry.component';

describe('DerryComponent', () => {
  let component: DerryComponent;
  let fixture: ComponentFixture<DerryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

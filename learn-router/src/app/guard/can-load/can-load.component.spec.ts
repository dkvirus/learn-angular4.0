import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanLoadComponent } from './can-load.component';

describe('CanLoadComponent', () => {
  let component: CanLoadComponent;
  let fixture: ComponentFixture<CanLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

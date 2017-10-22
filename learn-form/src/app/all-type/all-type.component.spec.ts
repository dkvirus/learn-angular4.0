import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypeComponent } from './all-type.component';

describe('AllTypeComponent', () => {
  let component: AllTypeComponent;
  let fixture: ComponentFixture<AllTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

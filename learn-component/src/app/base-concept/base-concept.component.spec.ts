import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConceptComponent } from './base-concept.component';

describe('BaseConceptComponent', () => {
  let component: BaseConceptComponent;
  let fixture: ComponentFixture<BaseConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

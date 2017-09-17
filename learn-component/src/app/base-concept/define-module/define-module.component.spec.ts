import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineModuleComponent } from './define-module.component';

describe('DefineModuleComponent', () => {
  let component: DefineModuleComponent;
  let fixture: ComponentFixture<DefineModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

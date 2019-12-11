import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Custodian2Component } from './custodian2.component';

describe('Custodian2Component', () => {
  let component: Custodian2Component;
  let fixture: ComponentFixture<Custodian2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Custodian2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Custodian2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

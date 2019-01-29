import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomComponent } from './pom.component';

describe('PomComponent', () => {
  let component: PomComponent;
  let fixture: ComponentFixture<PomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

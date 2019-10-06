import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab5Form3Component } from './lab5-form3.component';

describe('Lab5Form3Component', () => {
  let component: Lab5Form3Component;
  let fixture: ComponentFixture<Lab5Form3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab5Form3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab5Form3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

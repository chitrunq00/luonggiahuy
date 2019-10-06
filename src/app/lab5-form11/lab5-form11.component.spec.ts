import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab5Form11Component } from './lab5-form11.component';

describe('Lab5Form11Component', () => {
  let component: Lab5Form11Component;
  let fixture: ComponentFixture<Lab5Form11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab5Form11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab5Form11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab5Form2Component } from './lab5-form2.component';

describe('Lab5Form2Component', () => {
  let component: Lab5Form2Component;
  let fixture: ComponentFixture<Lab5Form2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab5Form2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab5Form2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

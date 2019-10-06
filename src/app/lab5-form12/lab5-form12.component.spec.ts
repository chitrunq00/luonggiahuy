import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab5Form12Component } from './lab5-form12.component';

describe('Lab5Form12Component', () => {
  let component: Lab5Form12Component;
  let fixture: ComponentFixture<Lab5Form12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab5Form12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab5Form12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

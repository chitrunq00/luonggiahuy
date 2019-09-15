import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstudentsComponent } from './detailstudents.component';

describe('DetailstudentsComponent', () => {
  let component: DetailstudentsComponent;
  let fixture: ComponentFixture<DetailstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCardComponent } from './your-card.component';

describe('YourCardComponent', () => {
  let component: YourCardComponent;
  let fixture: ComponentFixture<YourCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

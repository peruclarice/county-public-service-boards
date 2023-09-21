import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOneComponent } from './events-one.component';

describe('EventsOneComponent', () => {
  let component: EventsOneComponent;
  let fixture: ComponentFixture<EventsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

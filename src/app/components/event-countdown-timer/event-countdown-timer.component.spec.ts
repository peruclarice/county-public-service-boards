import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCountdownTimerComponent } from './event-countdown-timer.component';

describe('EventCountdownTimerComponent', () => {
  let component: EventCountdownTimerComponent;
  let fixture: ComponentFixture<EventCountdownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCountdownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-countdown-timer',
  templateUrl: './event-countdown-timer.component.html',
  styleUrls: ['./event-countdown-timer.component.css']
})
export class EventCountdownTimerComponent implements OnInit, OnDestroy {

  countdownDate: Date = new Date('2023-12-31T00:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private countdownInterval: any;

  constructor() {}

  ngOnInit() {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = this.countdownDate.getTime() - now;

    this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

}

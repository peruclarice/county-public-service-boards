import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-events-one',
  templateUrl: './events-one.component.html',
  styleUrls: ['./events-one.component.css']
})
export class EventsOneComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  scrollToEventSchedule() {
    const targetDiv = this.elementRef.nativeElement.querySelector('#eventSchedule');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
  }

}

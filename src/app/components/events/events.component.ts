import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  events;
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getEvents().subscribe(res => this.events = res);

    console.log(this.events)
  }

}

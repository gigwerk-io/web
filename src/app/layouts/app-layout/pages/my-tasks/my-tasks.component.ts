import { Component, OnInit } from '@angular/core';
import {Events} from '../../../../utils/services/events';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  constructor(
    private events: Events
  ) { }

  ngOnInit(): void {
    this.events.publish('currentPageUrl', '/app/my-tasks');
  }

}

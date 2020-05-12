import { Component, OnInit } from '@angular/core';
import {Events} from '../../../../utils/services/events';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  constructor(
    private events: Events
  ) { }

  ngOnInit(): void {
    this.events.publish('currentPageUrl', '/app/my-jobs');
  }

}

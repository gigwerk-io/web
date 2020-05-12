import { Component, OnInit } from '@angular/core';
import {Events} from '../../../../utils/services/events';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  constructor(
    private events: Events
  ) { }

  ngOnInit(): void {
    this.events.publish('currentPageUrl', '/app/marketplace');
  }

}

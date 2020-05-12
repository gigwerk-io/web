import { Component, OnInit } from '@angular/core';
import {Events} from '../../../../utils/services/events';
import {MainMarketplaceTask} from '../../../../utils/interfaces/main-marketplace/main-marketplace-task';
import {MarketplaceService} from '../../../../utils/services/marketplace.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {
  myJobs: MainMarketplaceTask[];

  constructor(
    private events: Events,
    private marketplaceService: MarketplaceService
  ) { }

  ngOnInit(): void {
    this.events.publish('currentPageUrl', '/app/my-jobs');
    this.marketplaceService.getMainMarketplaceRequests('proposals')
      .then(res => this.myJobs = res.data);
  }

}

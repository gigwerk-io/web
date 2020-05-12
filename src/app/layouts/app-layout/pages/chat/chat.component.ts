import { Component, OnInit } from '@angular/core';
import {Events} from '../../../../utils/services/events';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private events: Events
  ) { }

  ngOnInit(): void {
    this.events.publish('currentPageUrl', '/app/chat');
  }

}

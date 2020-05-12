import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketplaceComponent} from './pages/marketplace/marketplace.component';
import {AppLayoutComponent} from './app-layout.component';
import {AppLayoutRoutingModule} from './app-layout-routing.module';
import {CommonComponentsModule} from '../../utils/components/common-components.module';
import {MyTasksComponent} from './pages/my-tasks/my-tasks.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    MarketplaceComponent,
    MyTasksComponent,
    MyJobsComponent,
    ChatComponent,
    ProfileComponent
  ],
  imports: [
    AppLayoutRoutingModule,
    CommonModule,
    CommonComponentsModule
  ]
})
export class AppLayoutModule { }

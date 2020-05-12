import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MarketplaceComponent} from './pages/marketplace/marketplace.component';
import {AppLayoutComponent} from './app-layout.component';
import {MyTasksComponent} from './pages/my-tasks/my-tasks.component';
import {MyJobsComponent} from './pages/my-jobs/my-jobs.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {ChatComponent} from './pages/chat/chat.component';
import {CheckAuth} from '../../providers/check-auth.service';

const routes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivate: [CheckAuth],
    children: [
      {
        path: '',
        redirectTo: '/app/marketplace',
        pathMatch: 'full'
      },
      {
        path: 'marketplace',
        component: MarketplaceComponent
      },
      {
        path: 'my-tasks',
        component: MyTasksComponent
      },
      {
        path: 'my-jobs',
        component: MyJobsComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      }
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }

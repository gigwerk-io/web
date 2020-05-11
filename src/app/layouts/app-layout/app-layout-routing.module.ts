import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MarketplaceComponent} from '../../pages/marketplace/marketplace.component';
import {AppLayoutComponent} from './app-layout.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/app/marketplace',
        pathMatch: 'full'
      },
      {
        path: 'marketplace',
        component: MarketplaceComponent
      }
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }

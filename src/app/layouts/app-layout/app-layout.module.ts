import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketplaceComponent} from '../../pages/marketplace/marketplace.component';
import {AppLayoutComponent} from './app-layout.component';
import {AppLayoutRoutingModule} from './app-layout-routing.module';

@NgModule({
  declarations: [
    MarketplaceComponent,
    AppLayoutComponent
  ],
  imports: [
    AppLayoutRoutingModule,
    CommonModule
  ]
})
export class AppLayoutModule { }

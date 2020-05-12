import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {MomentModule} from 'ngx-moment';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {FavrImgComponent} from './favr-img/favr-img.component';
import {FavrInputComponent} from './favr-input/favr-input.component';
import { FavrNavComponent } from './favr-nav/favr-nav.component';
import { FavrMarketplaceCardComponent } from './favr-marketplace-card/favr-marketplace-card.component';

const COMPONENTS = [
  FavrImgComponent,
  FavrInputComponent
];

const MODULES = [
  CommonModule,
  FormsModule,
  IonicModule,
  MomentModule,
  RouterModule,
  NgbRatingModule,
];

@NgModule({
  imports: [...MODULES, ReactiveFormsModule],
  exports: [...COMPONENTS, ...MODULES, FavrNavComponent, FavrMarketplaceCardComponent],
  declarations: [...COMPONENTS, FavrNavComponent, FavrMarketplaceCardComponent]
})
export class CommonComponentsModule { }

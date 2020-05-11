import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {AppLayoutModule} from './layouts/app-layout/app-layout.module';
import {IonicModule} from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage';
import {MomentModule} from 'ngx-moment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '_favrDB',
      storeName: '__favrKV',
      description: 'FAVR client side storage'
    }),
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

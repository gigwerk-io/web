import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {MarketplaceComponent} from './layouts/app-layout/pages/marketplace/marketplace.component';
import {CheckAuth} from './providers/check-auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CheckAuth]
  },
  {
    path: 'app',
    loadChildren: () => import('src/app/layouts/app-layout/app-layout.module').then(m => m.AppLayoutModule),
    canActivate: [CheckAuth]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [CheckAuth]
})
export class AppRoutingModule { }

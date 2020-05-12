import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Storage} from '@ionic/storage';
import {AuthService} from '../utils/services/auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckAuth implements CanActivate {
  constructor(
    private storage: Storage,
    private router: Router,
    private auth: AuthService
  ) {  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.auth.isValidToken()
      .then(token => {
        console.log('>>>>> ' + token.data.validToken);
        if (token.data.validToken) {
          if (state.url !== '/app/marketplace') {
            this.router.navigateByUrl('/app/marketplace');
          }
        } else {
          if (!(state.url === '/login'
            || state.url === '/signup'
            || state.url === '/forgot-password')) {
            this.router.navigateByUrl('/login');
          }
        }
        return true;
      })
      .catch((error: HttpErrorResponse) => {
        console.log(error);
        if (!(state.url === '/login'
          || state.url === '/signup'
          || state.url === '/forgot-password')) {
          this.router.navigateByUrl('/login');
        }
        return false;
      });
  }
}

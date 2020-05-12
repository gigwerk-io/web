import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {Storage} from '@ionic/storage';
import {AuthResponse, SignOutResponse, ValidateTokenResponse} from '../interfaces/auth/auth-response';
import {AuthorizationToken, UserOptions, UserRegistrationOptions} from '../interfaces/user-options';
import {API_ADDRESS, StorageKeys} from '../../providers/constants';
import {RESTService} from './rest.service';
import {UtilsService} from './utils.service';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RESTService {
  authSubject = new BehaviorSubject(false);

  constructor(
    public httpClient: HttpClient,
    public storage: Storage,
    private utils: UtilsService,
    private navCtrl: NavController,
    private router: Router
  ) {
    super(httpClient, storage);
  }

  register(user: UserRegistrationOptions): Promise<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${API_ADDRESS}/register`, user).pipe(
      tap(async (res: AuthResponse) => {

        if (res) {
          await this.storage.set(StorageKeys.ACCESS_TOKEN, res.data.token);
          this.authSubject.next(true);
        }
      })
    ).toPromise();
  }

  login(user: UserOptions): Promise<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${API_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          await this.storage.set(StorageKeys.ACCESS_TOKEN, res.data.token);
          await this.storage.set(StorageKeys.PROFILE, res.data.profile);
          this.authSubject.next(true);
        }
      })
    ).toPromise()
      .then(res => {
        if (res.success) {
          this.router.navigateByUrl('/app/marketplace');
        }
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        console.log(error);
        if (error.error) {
          this.utils.presentToast(error.error.message, 'danger');
        }

        return {success: false};
      });
  }

  logout(): Promise<SignOutResponse> {
    return this.makeHttpRequest<SignOutResponse>(`/logout`, 'GET')
      .then(httpRes => httpRes
        .toPromise()
        .then((res: SignOutResponse) => {
          console.log(res);
          if (res.success) {
            this.utils.presentToast('You have been logged out.', 'success');
            this.storage.remove(StorageKeys.PROFILE);
            this.storage.remove(StorageKeys.ACCESS_TOKEN);
            this.authSubject.next(false);
            this.router.navigateByUrl('/login');
          }
          return res;
        }));
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }

  isValidToken(): Promise<ValidateTokenResponse> {
    return this.makeHttpRequest<ValidateTokenResponse>('validate', 'GET')
      .then(httpRes => httpRes.toPromise().then(res => {
        if (!res.data.validToken) {
          this.logout();
        }

        return res;
      }).catch((error: HttpErrorResponse) => {
        console.log(error);
        if (error.error) {
          this.utils.presentToast(error.error.message, 'danger');
        }

        return {success: false};
      }));
  }

  forgotPassword(email): Promise<SignOutResponse> {
    return this.httpClient.post<SignOutResponse>(`${API_ADDRESS}/forgot-password`, {email}).toPromise();
  }
}

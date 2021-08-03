import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import * as moment from 'moment';
// import 'rxjs/add/operator/do';
// import { pluck, share, shareReplay, tap } from 'rxjs/operators';
export interface IUser {
  email: string;
  avatarUrl?: string;
}

const defaultPath = '/';
const defaultUser = {
  email: 'sandra@example.com',
  avatarUrl:
    'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png',
};

@Injectable()
export class AuthService {
  private _user: IUser | null = defaultUser;
  private _logedIn2: boolean = false;
  // get loggedIn(): boolean {
  //   return !!this._user;
  // }
  get loggedIn(): boolean {
    return this._logedIn2;
  }

  private _lastAuthenticatedPath: string = defaultPath;
  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  constructor(private router: Router, private http: HttpClient) {}

  async logIn(email: string, password: string) {
    try {
      // this.http
      //   .post('https://localhost:44393/api/WebUser', {
      //     username: 'oussama@gmail.com',
      //     password: 'oussama',
      //     societe: 'string',
      //   })
      //   .do((res) => this.setSession)
      //   .shareReplay();

      console.log(email, password);
      console.log(this._logedIn2);

      this._user = { ...defaultUser, email };
      this._logedIn2 = true;
      this.router.navigate([this._lastAuthenticatedPath]);

      return {
        isOk: true,
        data: this._user,
      };
    } catch {
      return {
        isOk: false,
        message: 'Authentication failed',
      };
    }
  }
  // private setSession(authResult: any) {
  //   const expiresAt = moment().add(authResult.expiresIn, 'second');
  //   console.log(authResult + 'hello');
  //   localStorage.setItem('id_token', authResult.token);
  //   localStorage.setItem('username', authResult.username);
  //   localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  // }
  async getUser() {
    try {
      // Send request

      return {
        isOk: true,
        data: this._user,
      };
    } catch {
      return {
        isOk: false,
        data: null,
      };
    }
  }

  async logOut() {
    this._user = null;
    this._logedIn2 = false;
    this.router.navigate(['/login-form']);
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = ['login-form'].includes(
      route.routeConfig?.path || defaultPath
    );

    if (isLoggedIn && isAuthForm) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath =
        route.routeConfig?.path || defaultPath;
    }

    return isLoggedIn || isAuthForm;
  }
}
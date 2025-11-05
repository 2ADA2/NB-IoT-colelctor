import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AUTH } from '../../core/requests/common';
import { TokenInterface } from '../../core/interfaces/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AUTH_ROUTE } from '../../core/consts/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private cookieService: CookieService = inject(CookieService);
  private routerService = inject(Router);
  private http: HttpClient = inject(HttpClient);

  public isAuthenticated() {
    return !!this.cookieService.get("token");
  }

  public login(payload: { username: string, password: string }): Observable<TokenInterface> {
    return this.http.post<TokenInterface>(AUTH, {
      "AuthData": {
        "Login": payload.username,
        "Password": payload.password,
      },
    });
  }

  public logout() {
    this.cookieService.delete("token");
    this.routerService.navigateByUrl(AUTH_ROUTE);
  }

  public getToken(): string {
    return this.cookieService.get("token");
  }
}

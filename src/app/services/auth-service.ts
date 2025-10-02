import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AUTH } from '../core/consts/requests';
import { Core } from "./core";
import { TokenInterface } from '../core/interfaces/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AUTH_ROUTE } from '../core/consts/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private cookieService: CookieService = inject(CookieService);
  private routerService = inject(Router);
  private http: HttpClient = inject(HttpClient);

  isAuthenticated() {
    return !!this.cookieService.get("token");
  }

  login(payload: { username: string, password: string }):Observable<TokenInterface> {
    return this.http.post<TokenInterface>(AUTH, {
      "AuthData": {
        "Login": payload.username,
        "Password": payload.password,
      },
    });
  }

  logout() {
    this.cookieService.delete("token");
    this.routerService.navigateByUrl(AUTH_ROUTE);
  }

  getToken(): string {
    return this.cookieService.get("token");
  }
}

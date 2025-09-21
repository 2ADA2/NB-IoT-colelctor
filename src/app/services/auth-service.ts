import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AUTH } from '../core/consts/requests';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private cookieService: CookieService = inject(CookieService);
  private http: HttpClient = inject(HttpClient);

  login(payload: { username: string, password: string }) {
    return this.http.post(AUTH, {
      "AuthData": {
        "Login": payload.username,
        "Password": payload.password,
      },
    });
  }
}

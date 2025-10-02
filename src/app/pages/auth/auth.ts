import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlockHead } from '../components/block-head/block-head';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterface } from '../../core/interfaces/auth';
import { Router } from '@angular/router';
import { HOME_ROUTE } from '../../core/consts/routes';

@Component({
  selector: 'app-auth',
  imports: [
    BlockHead,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  private authService:AuthService = inject(AuthService);
  private cookieService = inject(CookieService);
  private routerService = inject(Router);

  public err = "";

  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  login() {
    if (this.form.value.username.length < 3) {
      this.err = "Неверное имя пользователя";
    } else if (this.form.value.password.length < 3) {
      this.err = "Неверный пароль";
    } else {
      this.authService.login(this.form.value).subscribe({
        next: (res:TokenInterface) => {
          this.cookieService.set("token", res.Token);
          this.routerService.navigateByUrl(HOME_ROUTE);
        },
        error: err => {
          this.err = err;
        },
      });
    }
  }
}

import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlockHead } from '../components/block-head/block-head';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterface } from '../../core/interfaces/auth';
import { Router } from '@angular/router';
import { HOME_ROUTE } from '../../core/consts/routes';
import { MessageService } from '../../services/message-service';

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
  private messageService:MessageService = inject(MessageService);
  private cookieService = inject(CookieService);
  private routerService = inject(Router);

  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  login() {
    if (this.form.value.username.length < 3) {
      this.messageService.createError("Ошибка входа", "Слишком короткое имя пользователя");
    } else if (this.form.value.password.length < 3) {
      this.messageService.createError("Ошибка входа", "Слишком короткий пароль");
    } else {
      this.authService.login(this.form.value).subscribe({
        next: (res:TokenInterface) => {
          this.cookieService.set("token", res.Token);
          this.routerService.navigateByUrl(HOME_ROUTE);
        },
        error: err => {
          this.messageService.createError("Ошибка входа", "Неверное имя пользователя или пароль");
        },
      });
    }
  }
}

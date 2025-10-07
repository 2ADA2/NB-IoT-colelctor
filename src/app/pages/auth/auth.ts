import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlockHead } from '../components/block-head/block-head';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterface } from '../../core/interfaces/auth';
import { Router } from '@angular/router';
import { HOME_ROUTE } from '../../core/consts/routes';
import { MessageService } from '../../services/message-service';
import { AUTH_RU } from '../../core/localization/ru/auth-ru';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-auth',
  imports: [
    BlockHead,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Auth {
  private authService: AuthService = inject(AuthService);
  private messageService: MessageService = inject(MessageService);
  private cookieService = inject(CookieService);
  private routerService = inject(Router);

  protected form: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  public login() {
    if (this.form.invalid) {
      const username = this.form.get('username');
      const password = this.form.get('password');

      if (username?.hasError('required')) {
        this.messageService.createError(AUTH_RU.ERROR, AUTH_RU.USERNAME_ERROR);
      } else if (password?.hasError('required')) {
        this.messageService.createError(AUTH_RU.ERROR, AUTH_RU.PASSWORD_ERROR);
      }

      return;
    }

    this.authService.login(this.form.value).pipe(
      tap((res: TokenInterface) => {
        this.cookieService.set("token", res.Token);
        this.routerService.navigateByUrl(HOME_ROUTE);
      }),
      catchError(() => {
        this.messageService.createError(AUTH_RU.ERROR, AUTH_RU.AUTH_ERROR);
        return of(null);
      }),
    ).subscribe();
  }

}

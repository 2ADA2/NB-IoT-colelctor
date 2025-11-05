import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/common/auth-service';
import { AUTH_ROUTE } from '../consts/routes';

export const authGuard: CanActivateFn = () => {
  const authSerivce = inject(AuthService);
  const routerService = inject(Router);

  if (authSerivce.isAuthenticated()) {
    return true;
  } else {
    routerService.navigateByUrl(AUTH_ROUTE);
    return false;
  }
};

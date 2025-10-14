import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { HOME_ROUTE } from '../consts/routes';

export const authRouteGuard: CanActivateFn = () => {
  const authSerivce = inject(AuthService);
  const routerService = inject(Router);

  if (!authSerivce.isAuthenticated()) {
    return true;
  } else {
    routerService.navigateByUrl(HOME_ROUTE);
    return false;
  }
};

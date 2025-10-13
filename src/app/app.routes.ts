import { Routes } from '@angular/router';
import { ADVANCED_ROUTE, AUTH_ROUTE, HOME_ROUTE, SETTINGS_ROUTE, SOURCES_ROUTE } from './core/consts/routes';
import { LayoutLite } from './core/layout/layout-lite/layout-lite';
import { Auth } from './pages/common/auth/auth';
import { LayoutMain } from './core/layout/layout-main/layout-main';
import { Sources } from './pages/common/sources/sources';
import { Home } from './pages/common/home/home';
import { Settings } from './pages/common/settings/settings';
import { AdvancedSettings } from './pages/common/advanced-settings/advanced-settings';
import { authGuard } from './core/guards/auth-guard';
import { authRouteGuard } from './core/guards/auth-route-guard';

export const routes: Routes = [
  {
    path: "", children: [
      {
        path: AUTH_ROUTE,
        component: LayoutLite,
        children: [
          { path: "", component: Auth },
        ],
        canActivate: [authRouteGuard],
      },
      {
        path: "",
        component: LayoutMain,
        children: [
          { path: "", redirectTo:HOME_ROUTE, pathMatch:"full" },
          { path: HOME_ROUTE, component: Home },
          { path: SETTINGS_ROUTE, component: Settings },
          { path: ADVANCED_ROUTE, component: AdvancedSettings },
          {
            path: SOURCES_ROUTE,
            component: Sources,
            children: [],
          },
          { path: "**", redirectTo: AUTH_ROUTE },
        ],
        canActivate: [authGuard],
      },
    ],
  },
];

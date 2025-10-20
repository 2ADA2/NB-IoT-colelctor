import { Routes } from '@angular/router';
import { ADVANCED_ROUTE, AUTH_ROUTE, HOME_ROUTE, SETTINGS_ROUTE, SOURCES_ROUTE } from './core/consts/routes';
import { Sources } from './pages/common/sources/sources';
import { Home } from './pages/common/home/home';
import { authGuard } from './core/guards/auth-guard';
import { authRouteGuard } from './core/guards/auth-route-guard';

export const routes: Routes = [
  {
    path: "", children: [
      {
        path: AUTH_ROUTE,
        loadComponent: () => import("./core/layout/layout-lite/layout-lite").then(m => m.LayoutLite),
        children: [
          {
            path: "",
            loadComponent: () => import("./pages/common/auth/auth").then(m => m.Auth),
          },
        ],
        canActivate: [authRouteGuard],
      },
      {
        path: "",
        loadComponent: () => import("./core/layout/layout-main/layout-main").then(m => m.LayoutMain),
        children: [
          { path: "", redirectTo:HOME_ROUTE, pathMatch:"full" },
          { path: HOME_ROUTE, component: Home },
          {
            path: SETTINGS_ROUTE,
            loadComponent: () => import('./pages/common/settings/settings').then(m => m.Settings),
          },
          {
            path: ADVANCED_ROUTE,
            loadComponent: () => import('./pages/common/advanced-settings/advanced-settings').then(m => m.AdvancedSettings),
          },
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

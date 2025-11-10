import { Routes } from '@angular/router';
import {
  ADVANCED_ROUTE,
  AUTH_ROUTE,
  D_CMD_ROUTE,
  D_INFO_ROUTE,
  D_SETTINGS_ROUTE,
  HOME_ROUTE,
  SETTINGS_ROUTE,
  SOURCES_ROUTE,
} from './core/consts/routes';
import { Home } from './pages/common/home/home';
import { authGuard } from './core/guards/auth-guard';
import { authRouteGuard } from './core/guards/auth-route-guard';
import { Sources } from './pages/dividers/sources/sources';

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
          { path: "", redirectTo: HOME_ROUTE, pathMatch: "full" },
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
          },

          {
            path: SOURCES_ROUTE + "/" + D_INFO_ROUTE + "/:id",
            loadComponent: () => import("./pages/dividers/source-pages/dev-info/dev-info").then(m => m.DevInfo),
          },
          {
            path: SOURCES_ROUTE + "/" + D_SETTINGS_ROUTE + "/:id",
            loadComponent: () => import("./pages/dividers/source-pages/dev-settings/dev-settings").then(m => m.DevSettings),
          },
          {
            path: SOURCES_ROUTE + "/" + D_CMD_ROUTE + "/:id",
            loadComponent: () => import("./pages/dividers/source-pages/dev-cmd/dev-cmd").then(m => m.DevCmd),
          },

          { path: "**", redirectTo: HOME_ROUTE },
        ],
        canActivate: [authGuard],
      },
    ],
  },
];

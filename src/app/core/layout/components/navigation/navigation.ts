import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ADVANCED_ROUTE, HOME_ROUTE, SETTINGS_ROUTE, SOURCES_ROUTE } from '../../../consts/routes';
import { NAV_RU } from '../../../localization/ru/nav-ru';
import { MatIcon } from '@angular/material/icon';
import { filter } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    MatIcon,
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  standalone: true,
})
export class Navigation {
  protected readonly ADVANCED = ADVANCED_ROUTE;
  protected readonly HOME = HOME_ROUTE;
  protected readonly SOURCES = SOURCES_ROUTE;
  protected readonly SETTINGS = SETTINGS_ROUTE;
  protected readonly NAV_RU = NAV_RU;

  private router = inject(Router);
  private currentUrl = this.router.url;

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .pipe(tap((route) => this.currentUrl = route.url))
      .subscribe();
  }

  public checkActivated(route:string) {
    return this.currentUrl.includes("/"+route) ? "activated" : "";
  }
}

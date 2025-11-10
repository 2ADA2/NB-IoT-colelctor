import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import {
  ADVANCED_ROUTE, D_CMD_ROUTE,
  D_INFO_ROUTE,
  D_SETTINGS_ROUTE,
  HOME_ROUTE,
  SETTINGS_ROUTE,
  SOURCES_ROUTE,
} from '../../../consts/routes';
import { NAV_DEV_RU, NAV_RU } from '../../../localization/ru/nav-ru';
import { MatIcon } from '@angular/material/icon';
import { filter } from 'rxjs';
import { tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SourceService } from '../../../../services/mqtt/source-service';

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

export class Navigation implements OnInit {
  protected readonly ADVANCED = ADVANCED_ROUTE;
  protected readonly HOME = HOME_ROUTE;
  protected readonly SOURCES = SOURCES_ROUTE;
  protected readonly SETTINGS = SETTINGS_ROUTE;
  protected readonly NAV_RU = NAV_RU;

  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private currentUrl = signal(this.router.url);
  private sourceService = inject(SourceService);

  public id: string | null = this.getID(this.route);

  private getID(activeRoute: ActivatedRoute) {
    while (activeRoute?.firstChild) {
      activeRoute = activeRoute.firstChild;
    }
    const params = activeRoute?.snapshot.params || {};
    this.sourceService.setId(params['id'] ?? null);
    return params['id'] ?? null;
  }

  public ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .pipe(
        tap((route) => {
          this.currentUrl.set(route.url);

          const activeRoute: ActivatedRoute | null = this.route;
          this.id = this.getID(activeRoute);
        }),
        takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  public checkActivated(route: string, strict = false) {
    if (strict) {
      return this.currentUrl() === "/" + route;
    }
    return this.currentUrl().includes("/" + route);
  }

  protected readonly D_INFO_ROUTE = D_INFO_ROUTE;
  protected readonly SOURCES_ROUTE = SOURCES_ROUTE;
  protected readonly D_SETTINGS_ROUTE = D_SETTINGS_ROUTE;
  protected readonly D_CMD_ROUTE = D_CMD_ROUTE;
  protected readonly NAV_DEV_RU = NAV_DEV_RU;
}

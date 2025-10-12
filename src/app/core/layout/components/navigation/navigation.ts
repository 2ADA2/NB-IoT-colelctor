import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ADVANCED_ROUTE, HOME_ROUTE, SETTINGS_ROUTE, SOURCES_ROUTE } from '../../../consts/routes';
import { HOME_RU } from '../../../localization/ru/home-ru';
import { NAV_RU } from '../../../localization/ru/nav-ru';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
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
  protected readonly HOME_RU = HOME_RU;
  protected readonly NAV_RU = NAV_RU;
}

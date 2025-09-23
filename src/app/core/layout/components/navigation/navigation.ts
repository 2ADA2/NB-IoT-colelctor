import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ADVANCED_ROUTE, HOME_ROUTE, SETTINGS_ROUTE, SOURCES_ROUTE } from '../../../consts/routes';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  protected readonly ADVANCED = ADVANCED_ROUTE;
  protected readonly HOME = HOME_ROUTE;
  protected readonly SOURCES = SOURCES_ROUTE;
  protected readonly SETTINGS = SETTINGS_ROUTE;
}

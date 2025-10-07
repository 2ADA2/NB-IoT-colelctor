import { Component, inject } from '@angular/core';
import { Header } from '../components/header/header';
import { Navigation } from '../components/navigation/navigation';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Core } from '../../../services/core';
import { Loading } from '../../../pages/loading/loading';

@Component({
  selector: 'app-layout-main',
  imports: [
    Header,
    Navigation,
    RouterOutlet,
    Loading,
  ],
  templateUrl: './layout-main.html',
  styleUrl: './layout-main.scss',
})
export class LayoutMain {
  private core: Core = inject(Core);
  public isLoading = true;

  constructor() {
    this.core.coreLoading.subscribe(loading => {
      this.isLoading = loading;
    });
  }
}

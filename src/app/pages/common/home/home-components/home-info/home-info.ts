import { Component, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Core } from '../../../../../services/core';
import { HOME_RU } from '../../../../../core/localization/ru/home-ru';

@Component({
  selector: 'app-home-info',
  imports: [],
  templateUrl: './home-info.html',
  styleUrl: './home-info.scss',
})
export class HomeInfo {
  private http: HttpClient = inject(HttpClient);
  private core = inject(Core);

  os = "";
  protocol = "";
  procInfo="";

  constructor() {
    effect(() => {
      const info = this.core.getInfo();
      this.os = info.os;
      this.protocol = info.protocol;
    });
  }

  protected readonly HOME_RU = HOME_RU;
}

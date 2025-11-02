import { Component, effect, inject, Injector, runInInjectionContext, OnInit } from '@angular/core';
import { Core } from '../../../../../services/common/core';
import { HOME_RU } from '../../../../../core/localization/ru/home-ru';

@Component({
  selector: 'app-home-info',
  imports: [],
  templateUrl: './home-info.html',
  styleUrl: './home-info.scss',
  standalone: true,
})
export class HomeInfo implements OnInit {
  private core = inject(Core);
  private injector = inject(Injector);

  public os = "";
  public protocol = "";
  public procInfo = "";

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        const info = this.core.getInfo();
        this.os = info.os;
        this.protocol = info.protocol;
      });
    });
  }

  protected readonly HOME_RU = HOME_RU;
}

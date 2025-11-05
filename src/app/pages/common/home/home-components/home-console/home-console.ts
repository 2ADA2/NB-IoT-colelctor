import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { HOME_RU } from "../../../../../core/localization/ru/home-ru";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../../../../../services/common/home-service';
import { tap } from 'rxjs/operators';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home-console',
  imports: [
    ReactiveFormsModule,
    MatIcon,
  ],
  templateUrl: './home-console.html',
  styleUrl: './home-console.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeConsole implements OnInit {
  private homeService: HomeService = inject(HomeService);
  private injector = inject(Injector);

  public consoleControl = new FormControl("");
  public consoleText = new FormControl(this.homeService.cmd());

  public ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.consoleText.setValue(this.homeService.cmd());
      });
    });
  }

  public sendCommand() {
    const val: string | null = this.consoleControl.value;

    if (!val || !val.trim()) {
      this.consoleControl.reset();
      return;
    }

    this.addConsoleText(val);
    if (val === "ping") {
      setTimeout(() => {
        this.addConsoleText("pong");
      }, 100);
      this.consoleControl.reset();
      return;
    }

    this.homeService.cmdGet(val).pipe(tap((res: string) => {
      this.addConsoleText(res);
    })).subscribe();
    this.consoleControl.reset();
  }

  private addConsoleText(val: string) {
    const history = this.consoleText.value || '';
    this.consoleText.setValue(history ? `${history}\n> ${val}` : `> ${val}`);
    this.homeService.saveCmdText(this.consoleText.value || "");
  }

  protected readonly HOME_RU = HOME_RU;
}

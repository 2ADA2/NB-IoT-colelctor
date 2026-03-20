import { Component, effect, inject, runInInjectionContext, OnInit, Injector } from '@angular/core';
import { DevCommandsService } from '../../../services/mqtt/dev-commands-service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resp-field',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './resp-field.html',
  styleUrl: './resp-field.scss',
})
export class RespField implements OnInit {
  private injector: Injector = inject(Injector);
  private devCommandService: DevCommandsService = inject(DevCommandsService);

  public entries: string[][] = [];

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        console.log(1);
        const res = this.devCommandService.response();
        if (res && typeof res === 'object') {
          this.entries = Object.entries(res);
        }
      });
    });
  }

  protected readonly of = of;
}

import { Component, effect, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { BlockHead } from '../../../components/block-head/block-head';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Body } from '../../../components/body/body';
import {
  CONFIG_RU_STATE,
  DEV_INFO_BLOCK_RU,
  DEV_INFO_RU,
  DEV_STATUS_RU_ERRORS,
} from '../../../../core/localization/ru/dev-info-ru';
import { SourceService } from '../../../../services/mqtt/source-service';
import { DeviceInfoInterface } from '../../../../core/interfaces/sources';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mqtt-dev-info',
  templateUrl: './mqtt-dev-info.html',
  styleUrl: './mqtt-dev-info.scss',
  standalone: true,
  imports: [
    BlockHead,
    FormsModule,
    ReactiveFormsModule,
    Body,
  ],
})
export class MqttDevInfo implements OnInit {
  private injector: Injector = inject(Injector);
  private sourceService = inject(SourceService);

  public id = "";
  public device:DeviceInfoInterface|null = null;

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.id = this.sourceService.getId() || "";
        this.device = this.sourceService.getDeviceById(this.id) || null;
        if (!this.device) {
          this.sourceService.updateSources()
            .pipe(tap(() => {
              this.device = this.sourceService.getDeviceById(this.id) || null;
            })).subscribe();
        }
      });
    });
  }
  protected readonly DEV_INFO_RU = DEV_INFO_RU;
  protected readonly DEV_INFO_BLOCK_RU = DEV_INFO_BLOCK_RU;
  protected readonly DEV_STATUS_RU_ERRORS = DEV_STATUS_RU_ERRORS;
  protected readonly CONFIG_RU_STATE = CONFIG_RU_STATE;
}

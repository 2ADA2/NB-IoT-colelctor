import { Component, effect, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { BlockHead } from '../../../components/block-head/block-head';
import { Body } from '../../../components/body/body';
import { SourceService } from '../../../../services/mqtt/source-service';
import { DEV_INFO_RU, DEV_STATUS_RU_ERRORS } from '../../../../core/localization/ru/dev-info-ru';
import { DEV_SETTINGS_RU } from '../../../../core/localization/ru/dev-settings-ru';

@Component({
  selector: 'app-mqtt-dev-settings',
  imports: [
    BlockHead,
    Body,
  ],
  templateUrl: './mqtt-dev-settings.html',
  styleUrl: './mqtt-dev-settings.scss',
})
export class MqttDevSettings implements OnInit {
  private injector: Injector = inject(Injector);
  private sourceService = inject(SourceService);

  public id:string|null = null;

  public ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.id = this.sourceService.getId();
      });
    });
  }

  protected readonly DEV_STATUS_RU_ERRORS = DEV_STATUS_RU_ERRORS;
  protected readonly DEV_INFO_RU = DEV_INFO_RU;
  protected readonly DEV_SETTINGS_RU = DEV_SETTINGS_RU;
}

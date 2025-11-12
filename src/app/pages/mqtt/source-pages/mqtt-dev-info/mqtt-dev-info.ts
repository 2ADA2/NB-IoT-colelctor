import { Component, effect, forwardRef, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { BlockHead } from '../../../components/block-head/block-head';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Body } from '../../../components/body/body';
import {
  CONFIG_RU_STATE,
  DEV_INFO_BLOCK_RU,
  DEV_INFO_RU,
  DEV_STATUS_RU_ERRORS,
} from '../../../../core/localization/ru/dev-info-ru';
import { SourceService } from '../../../../services/mqtt/source-service';
import { DBStateInterface, DeviceInfoInterface } from '../../../../core/interfaces/sources';
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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MqttDevInfo),
      multi: true,
    },
  ],

})
export class MqttDevInfo implements OnInit {
  private injector: Injector = inject(Injector);
  private sourceService = inject(SourceService);

  public id = "";
  public device:DeviceInfoInterface|null = null;

  public DBState = false;
  public DBNum = new FormControl<number>(133000);

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.id = this.sourceService.getId() || "";
        this.device = this.sourceService.getDeviceById(this.id) || null;
        this.DBState = this.sourceService.getDBState() || false;
        if (!this.device) {
          this.sourceService.updateSources()
            .pipe(tap(() => {
              this.device = this.sourceService.getDeviceById(this.id) || null;
              this.DBState = this.sourceService.getDBState() || false;
            })).subscribe();
        }
      });
    });
  }

  private updateDBState() {
    this.sourceService.updateDBState(this.id).pipe(tap((res:DBStateInterface) => {
      this.DBState = res.PutDBState;
      this.sourceService.setDBState(this.DBState);
    })).subscribe();
  }

  protected readonly DEV_INFO_RU = DEV_INFO_RU;
  protected readonly DEV_INFO_BLOCK_RU = DEV_INFO_BLOCK_RU;
  protected readonly DEV_STATUS_RU_ERRORS = DEV_STATUS_RU_ERRORS;
  protected readonly CONFIG_RU_STATE = CONFIG_RU_STATE;
}

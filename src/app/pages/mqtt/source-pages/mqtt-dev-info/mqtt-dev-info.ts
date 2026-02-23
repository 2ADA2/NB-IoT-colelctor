import { Component, effect, forwardRef, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { BlockHead } from '../../../components/block-head/block-head';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Body } from '../../../components/body/body';
import {
  CONFIG_RU_STATE,
  DEV_INFO_BLOCK_RU,
  DEV_INFO_RU, DEV_RU_STATES,
  DEV_STATUS_RU_ERRORS,
} from '../../../../core/localization/ru/dev-info-ru';
import { SourceService } from '../../../../services/mqtt/source-service';
import { DBStateInterface, DeviceInfoInterface } from '../../../../core/interfaces/sources';
import { tap } from 'rxjs/operators';
import { MessageService } from '../../../../services/common/message-service';

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
  private messageService: MessageService = inject(MessageService);

  public id = "";
  public device: DeviceInfoInterface | null = null;

  public DBState = false;
  public DBNum = new FormControl<number>(133000);

  public states: string[] = [];

  public ngOnInit(): void {
    // effect
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.id = this.sourceService.getId() || "";
        this.updateDevice();
        if (!this.device) {
          this.sourceService.updateSources()
            .pipe(tap(() => {
              this.updateDevice();
            })).subscribe();
        }
      });
    });
  }

  public updateDevice() {
    this.device = this.sourceService.getDeviceById(this.id) || null;
    this.DBState = this.sourceService.getDBState() || false;
    if (this.device) {
      this.states = [];
      const state = this.device.DeviceAttr.State;
      this.states.push(String(state) + DEV_RU_STATES[state]);
      const errors = this.sourceService.getErrors(this.device.DeviceAttr.Metrics.StatusBitMask);
      errors.forEach(e => this.states.push(DEV_STATUS_RU_ERRORS[e]));
    }
  }

  private updateDBState() {
    this.sourceService.updateDBState(this.id).pipe(tap((res: DBStateInterface) => {
      this.DBState = res.PutDBState;
      this.sourceService.setDBState(this.DBState);
    })).subscribe();
  }

  public putInDB(state = true) {
    if (this.DBNum.value !== null) {
      this.messageService.newMessage("DB State", "request has been sent", "standard");
      this.sourceService.putInDB(this.DBNum.value, state)
        .pipe(tap((res: unknown) => {
          if (typeof (res) === "object" && res) {
            this.checkDBStatus(res);
          }
          this.updateDBState();
        })).subscribe();
    }
  }

  private checkDBStatus(res: object) {
    if ("Info" in res && typeof (res["Info"]) === "string") {
      this.messageService.newMessage("DB State", res.Info, "success");
    }
  }

  protected readonly DEV_INFO_RU = DEV_INFO_RU;
  protected readonly DEV_INFO_BLOCK_RU = DEV_INFO_BLOCK_RU;
  protected readonly DEV_STATUS_RU_ERRORS = DEV_STATUS_RU_ERRORS;
  protected readonly CONFIG_RU_STATE = CONFIG_RU_STATE;
}

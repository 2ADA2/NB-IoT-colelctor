import { Component, effect, inject, Injector, runInInjectionContext, OnInit, computed, Signal } from '@angular/core';
import { BlockHead } from "../../../components/block-head/block-head";
import { Body } from "../../../components/body/body";
import { SourceService } from '../../../../services/mqtt/source-service';
import {
  DEV_COMMAND_NAMES_RU,
  DEV_COMMANDS_RU, DevCommandKeys,
} from '../../../../core/localization/ru/dev-commands-ru';
import { NgComponentOutlet } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatOption, MatSelect } from '@angular/material/select';
import { mqttCommandComponents, mqttCommandNames } from './consts/mqtt-commands';
import { DevCommandsService } from '../../../../services/mqtt/dev-commands-service';
import { RespField } from '../../../components/resp-field/resp-field';
import { LoadingComponent } from '../../../components/loading-component/loading-component';

@Component({
  selector: 'app-mqtt-dev-commands',
  imports: [
    BlockHead,
    Body,
    NgComponentOutlet,
    MatFormField,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOption,
    MatSelect,
    RespField,
    LoadingComponent,
  ],
  templateUrl: './mqtt-dev-commands.html',
  styleUrl: './mqtt-dev-commands.scss',
})

export class MqttDevCommands implements OnInit {
  private injector = inject(Injector);
  private sourceService = inject(SourceService);
  private devCommandService = inject(DevCommandsService);

  public id: string | null = null;
  public commands = mqttCommandComponents;
  public commandsNames = mqttCommandNames;
  public commandSelect = new FormControl<number>(0);

  public lastID: Signal<string | null> = computed(() => {
    return this.devCommandService.lastID();
  });
  public command: Signal<DevCommandKeys> = computed(() => {
    return this.devCommandService.getStatus().command() || "UNKNOWN";
  });
  public commandStatus: Signal<null | string> = computed(() => {
    return this.devCommandService.getStatus().status();
  });
  public inProgress: Signal<boolean> = computed(() => {
    return this.devCommandService.getStatus().inProgress();
  });

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.id = this.sourceService.getId();
      });
    });
  }

  stopCommand() {
    if (this.inProgress()) {
      this.devCommandService.stopCommand();
    }
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
  protected readonly Object = Object;
  protected readonly DEV_COMMAND_NAMES_RU = DEV_COMMAND_NAMES_RU;
  protected readonly String = String;
}

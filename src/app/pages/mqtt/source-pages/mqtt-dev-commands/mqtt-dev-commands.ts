import { Component, effect, inject, Injector, runInInjectionContext, OnInit } from '@angular/core';
import { BlockHead } from "../../../components/block-head/block-head";
import { Body } from "../../../components/body/body";
import { SourceService } from '../../../../services/mqtt/source-service';
import { DEV_COMMAND_NAMES_RU, DEV_COMMANDS_RU } from '../../../../core/localization/ru/dev-commands-ru';
import { NgComponentOutlet } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatOption, MatSelect } from '@angular/material/select';
import { mqttCommandComponents, mqttCommandNames } from '../../../../core/consts/mqtt-commands';

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
  ],
  templateUrl: './mqtt-dev-commands.html',
  styleUrl: './mqtt-dev-commands.scss',
})

export class MqttDevCommands implements OnInit {
  private injector = inject(Injector);
  private sourceService = inject(SourceService);

  public id: string | null = null;
  public commands = mqttCommandComponents;
  public commandsNames = mqttCommandNames;
  public commandSelect = new FormControl<number>(0);

  public commandSent: string | null = null;
  public commandStatus: string | null = null;

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.id = this.sourceService.getId();
      });
    });
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
  protected readonly Object = Object;
  protected readonly DEV_COMMAND_NAMES_RU = DEV_COMMAND_NAMES_RU;
  protected readonly String = String;
}

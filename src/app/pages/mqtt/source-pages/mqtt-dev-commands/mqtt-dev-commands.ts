import { Component, effect, inject, Injector, runInInjectionContext, OnInit } from '@angular/core';
import { DEV_SETTINGS_RU } from "../../../../core/localization/ru/dev-settings-ru";
import { BlockHead } from "../../../components/block-head/block-head";
import { Body } from "../../../components/body/body";
import { SourceService } from '../../../../services/mqtt/source-service';
import { DEV_COMMANDS_RU } from '../../../../core/localization/ru/dev-commands-ru';
import { RegisterCommand } from './commands/register-command/register-command';
import { GetStateCommand } from './commands/get-state-command/get-state-command';
import { NgComponentOutlet } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatOption, MatSelect } from '@angular/material/select';

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
  public commands = [RegisterCommand, GetStateCommand];
  public commandSelect = new FormControl(0);

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.id = this.sourceService.getId();
      });
    });
  }

  protected readonly DEV_SETTINGS_RU = DEV_SETTINGS_RU;
  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

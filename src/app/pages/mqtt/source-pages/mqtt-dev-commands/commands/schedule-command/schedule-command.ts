import { Component } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';

@Component({
  selector: 'app-schedule-command',
  imports: [
    MatFormField, MatFormFieldModule, ReactiveFormsModule, MatInput,
  ],
  templateUrl: './schedule-command.html',
  styleUrl: './schedule-command.scss',
})
export class ScheduleCommand {

  public formGroup = new FormGroup({
    Trepeat: new FormControl(30),
    TimeZone: new FormControl(0),
    NetDelay: new FormControl(0),
  });

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

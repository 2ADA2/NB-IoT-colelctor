import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-set-sensor-command',
  imports: [
    FormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatSlideToggle,
  ],
  templateUrl: './set-sensor-command.html',
  styleUrl: './set-sensor-command.scss',
})
export class SetSensorCommand {

  public formGroup: FormGroup = new FormGroup({
    Kval: new FormControl(100),
    Tprepare: new FormControl(100),
    SenseCheck: new FormControl(false),
  });

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

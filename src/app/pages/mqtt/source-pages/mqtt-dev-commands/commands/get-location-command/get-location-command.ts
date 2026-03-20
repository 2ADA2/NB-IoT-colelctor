import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';

@Component({
  selector: 'app-get-location-command',
  imports: [
    FormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './get-location-command.html',
  styleUrl: './get-location-command.scss',
})
export class GetLocationCommand {

  public formGroup: FormGroup = new FormGroup({
    GNSSType: new FormControl(0),
    GNSSTimeout: new FormControl(300),
  });

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

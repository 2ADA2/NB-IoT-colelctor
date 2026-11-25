import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';

@Component({
  selector: 'app-software-update-command',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './software-update-command.html',
  styleUrl: './software-update-command.scss',
})
export class SoftwareUpdateCommand {

  public formGroup: FormGroup = new FormGroup({
    Name: new FormControl("1.0.0.a"),
  });

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

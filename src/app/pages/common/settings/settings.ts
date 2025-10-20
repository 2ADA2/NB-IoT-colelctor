import { Component } from '@angular/core';
import { BlockHead } from '../../components/block-head/block-head';
import { Body } from '../../components/body/body';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatFormField } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { LWData } from '../../../core/data/settingsData';

@Component({
  selector: 'app-settings',
  imports: [
    BlockHead,
    Body,
    MatSlideToggle,
    MatFormField,
    MatSelect,
    MatOption,
    FormsModule,
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  public LWQos = LWData[0].val;


  protected readonly LWData = LWData;
}

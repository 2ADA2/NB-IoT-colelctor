import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IMIT_SETTINGS_RU } from "../../../../../../core/localization/ru/dev-settings-ru";
import { DeviceService } from '../../../../../../services/device-service';

@Component({
  selector: 'app-table',
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table implements OnInit {
  private deviceService = inject(DeviceService);

  public imitGroup = new FormGroup({
    ampA: new FormControl(0),
    ampB: new FormControl(0),
    ampC: new FormControl(0),
    freqA: new FormControl(0),
    freqB: new FormControl(0),
    freqC: new FormControl(0),
    phaseA: new FormControl(0),
    phaseB: new FormControl(0),
    phaseC: new FormControl(0),
    noise: new FormControl(0),
  });

  public ngOnInit() {
    this.updateServiceImit();
  }

  public validTable() {
    const val = this.imitGroup.value;
    this.imitGroup.patchValue({
      ampA: Number(val.ampA),
      ampB: Number(val.ampB),
      ampC: Number(val.ampC),
      freqA: Number(val.freqA),
      freqB: Number(val.freqB),
      freqC: Number(val.freqC),
      phaseA: Number(val.phaseA),
      phaseB: Number(val.phaseB),
      phaseC: Number(val.phaseC),
      noise: Number(val.noise),
    });
    this.updateServiceImit();
  }

  private updateServiceImit() {
    this.deviceService.updateImitData({
      ampA: this.imitGroup.value.ampA || 0,
      ampB: this.imitGroup.value.ampB || 0,
      ampC: this.imitGroup.value.ampC || 0,
      freqA: this.imitGroup.value.freqA || 0,
      freqB: this.imitGroup.value.freqB || 0,
      freqC: this.imitGroup.value.freqC || 0,
      phaseA: this.imitGroup.value.phaseA || 0,
      phaseB: this.imitGroup.value.phaseB || 0,
      phaseC: this.imitGroup.value.phaseC || 0,
      noise: this.imitGroup.value.noise || 0,
    });
  }

  protected readonly IMIT_SETTINGS_RU = IMIT_SETTINGS_RU;
}

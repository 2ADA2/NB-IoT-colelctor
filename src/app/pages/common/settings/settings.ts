import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { BlockHead } from '../../components/block-head/block-head';
import { Body } from '../../components/body/body';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatFormField } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LWData } from '../../../core/data/settingsData';
import { SettingsService } from '../../../services/common/settings-service';
import { SettingsData } from '../../../core/interfaces/settings';

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
    ReactiveFormsModule,
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Settings implements OnInit {
  private settingsService = inject(SettingsService);
  private injector = inject(Injector);

  formGroup = new FormGroup({
    HostName: new FormControl('', Validators.required),
    Port: new FormControl(3000, Validators.required),
    ClientID: new FormControl('', Validators.required),
    CleanSession: new FormControl(false, Validators.required),
    KeepAlive: new FormControl(0, Validators.required),
    Name: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    LWTopic: new FormControl('', Validators.required),
    LWMessage: new FormControl('', Validators.required),
    LWRetain: new FormControl(false, Validators.required),
    LWQos: new FormControl(0, Validators.required),
  });

  public ngOnInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        const settings: SettingsData | null = this.settingsService.settings();
        if (settings) {
          this.formGroup.setValue({
            HostName: settings.ConnectionDetails.HostName,
            Port: settings.ConnectionDetails.Port,
            ClientID: settings.ConnectionDetails.ClientID,
            CleanSession: settings.ConnectionDetails.CleanSession,
            KeepAlive: settings.ConnectionDetails.KeepAlive,
            Name: settings.Credentials.UserName,
            Password: settings.Credentials.Password,
            LWTopic: settings.LastWill.LastWillTopic,
            LWMessage: settings.LastWill.LastWillMessage,
            LWRetain: settings.LastWill.LastWillRetain,
            LWQos: settings.LastWill.LastWillQos,
          });
        }
      });
    });
  }

  public saveSettings() {
    const form = this.formGroup.value;
    this.settingsService.updateSettings({
      "CleanSession": form.CleanSession || false,
      "ClientID": form.ClientID || "",
      "HostName": form.HostName || "",
      "KeepAlive": form.KeepAlive || 60,
      "Port": form.Port || 1000,
      "Password": form.Password || "",
      "UserName": form.Name || "",
      "LastWillMessage": form.LWMessage || "",
      "LastWillQos": form.LWQos || 0,
      "LastWillRetain": form.LWRetain || false,
      "LastWillTopic": form.LWTopic || "",
    });
  }


  protected readonly LWData = LWData;
}

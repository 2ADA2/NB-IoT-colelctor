import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Core } from './core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { SettingsData, SettingsFormData } from '../core/interfaces/settings';
import {  MQTT_SET_SETTINGS, MQTT_SETTINGS, SUB_SET_SETTINGS, SUB_SETTINGS } from '../core/consts/requests';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private core = inject(Core);
  private http = inject(HttpClient);


  public settings: WritableSignal<SettingsData | null> = signal(null);

  constructor() {
    switch (this.core.getInfo().protocol) {
      case 'mqtt':
        this.updateMqttSettings();
        break;
      case "sub":
        this.updateSubSettings();
        break;
    }
  }

  private updateMqttSettings(): void {
    this.http.get<SettingsData>(MQTT_SETTINGS)
      .pipe(tap((res) => {
        this.settings.set(res);
      })).subscribe();
  }

  private updateSubSettings(): void {
    this.http.get<SettingsData>(SUB_SETTINGS)
      .pipe(tap((res) => {
        this.settings.set(res);
      })).subscribe();
  }

  public updateSettings(form: SettingsFormData) {
    switch (this.core.getInfo().protocol) {
      case 'mqtt':
        this.setMqttSettings(form, MQTT_SET_SETTINGS);
        break;
      case "sub":
        this.setMqttSettings(form, SUB_SET_SETTINGS);
        break;
    }
  }

  private setMqttSettings(form:SettingsFormData, route:string): void {
    this.http.post(route, {
      ConnectionDetails: {
        "CleanSession": form.CleanSession,
        "ClientID": form.ClientID,
        "HostName": form.HostName,
        "KeepAlive": form.KeepAlive,
        "Port": form.Port,
      },
      Credentials: {
        "Password": form.Password,
        "UserName": form.UserName,
      },
      LastWill: {
        "LastWillMessage": form.LastWillMessage,
        "LastWillQos": form.LastWillQos,
        "LastWillRetain": form.LastWillRetain,
        "LastWillTopic": form.LastWillTopic,
      },
    });
  }
}

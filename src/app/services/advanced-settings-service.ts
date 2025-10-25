import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADVANCED } from '../core/consts/requests';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdvancedSettingsService {
  private http = inject(HttpClient);

  public advSettings = signal("");

  constructor() {
    this.getSettings().subscribe();
  }

  getSettings() {
    return this.http.get(ADVANCED, {
      responseType: "text" as const,
    }).pipe(tap((res) => {
      this.advSettings.set(res);
    }));
  }

  setSettings(newSettings:string) {
    return this.http.post(ADVANCED, newSettings);
  }
}

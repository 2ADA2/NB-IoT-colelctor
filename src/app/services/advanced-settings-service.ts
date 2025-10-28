import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADVANCED, BACKEND_UPDATE, FRONTEND_UPDATE } from '../core/consts/requests';
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

  public getSettings() {
    return this.http.get(ADVANCED, {
      responseType: "text" as const,
    }).pipe(tap((res) => {
      this.advSettings.set(res);
    }));
  }

  public setSettings(newSettings: string) {
    return this.http.post(ADVANCED, newSettings);
  }

  public saveFrontend(file: File) {
    return this.http.post(FRONTEND_UPDATE, file);
  }

  public saveBackend(file: File) {
    return this.http.post(BACKEND_UPDATE, file);
  }
}

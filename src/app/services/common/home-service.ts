import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CMD } from '../../core/requests/common';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http: HttpClient = inject(HttpClient);

  public procInfo: WritableSignal<string> = signal("");

  // proc-info-fn

  public cmd: WritableSignal<string> = signal("");
  private cookieService = inject(CookieService);

  public cmdGet(command: string) {
    return this.http.post(CMD, { CMD: command }, {
      responseType: "text" as const,
    }).pipe(tap((res: string) => {
      this.saveCmdText(res);
    }));
  }

  public saveCmdText(val: string) {
    this.cmd.set(val);
  }

}

import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CMD } from '../core/consts/requests';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http: HttpClient = inject(HttpClient);

  public procInfo :WritableSignal<string> = signal("");

  // proc-info-fn

  public cmd = "";
  private cookieService = inject(CookieService);

  public cmdGet(command:string) {
    return this.http.post(CMD, { CMD:command }, {
      headers:{
        "Authorization": this.cookieService.get("token"),
      },
      responseType: "text" as const,
    });
  }

  public saveCmdText(val:string) {
    this.cmd = val;
  }

}

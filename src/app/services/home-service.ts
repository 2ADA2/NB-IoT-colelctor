import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http: HttpClient = inject(HttpClient);


  public procInfo :WritableSignal<string> = signal("");

  public updateProcInfo() {
    this.http.get("").pipe(tap((res) => {
      console.log(res);
    })).subscribe();
  }

  public cmd = "";

  public cmdGet(command:string) {
    this.http.get("").pipe(tap((res) => {
      console.log(res);
    })).subscribe();
  }

}

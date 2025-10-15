import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OS, TYPE } from '../core/consts/requests';
import { OSInterface, ProtocolInterface } from '../core/interfaces/core';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Core {
  private http: HttpClient = inject(HttpClient);
  private err: Error | null = null;
  private os: "win" | "linux" | null = null;
  private protocol: "mqtt" | "sub" | null = null;

  public coreLoading: WritableSignal<boolean> = signal(true);

  constructor() {
    this.updateOs();
    this.updateProtocol();
  }

  public getInfo():{os:string, protocol:string} {
    return {
      os: this.os||"",
      protocol: this.protocol||"",
    };
  }

  private updateOs() {
    this.http.get<OSInterface>(OS).pipe(
      tap((next: OSInterface) => {
        this.os = next["Operating system"];
        this.checkLoading();
      }),
      catchError(() => {
        this.err = new Error("Auth error");
        return of(null);
      }),
    ).subscribe();
  }

  private updateProtocol() {
    return this.http.get<ProtocolInterface>(TYPE).pipe(
      tap((next: ProtocolInterface) => {
        this.protocol = next["Protocol type"];
        this.checkLoading();
      }),
      catchError(() => {
        this.err = new Error("Protocol invalid");
        return of(null);
      }),
    ).subscribe();
  }

  private checkLoading() {
    if (this.os && this.protocol && !this.err) {
      this.coreLoading.set(false);
    }
  }

  private checkError() {
    return !!this.err;
  }

  public updateCore() {
    this.os = null;
    this.protocol = null;
    this.err = null;
    this.checkLoading();
    this.updateOs();
    this.updateProtocol();
  }
}

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OS, TYPE } from '../core/consts/requests';
import { OSInterface, ProtocolInterface } from '../core/interfaces/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Core {
  private http: HttpClient = inject(HttpClient);
  private err: Error | null = null;
  private os: "win" | "linux" | null = null;
  private protocol: "mqtt" | "sub" | null = null;

  public coreLoading = new Subject<boolean>();

  constructor() {
    this.updateOs();
    this.updateProtocol();
  }

  updateOs() {
    this.http.get<OSInterface>(OS).subscribe({
      next: (next: OSInterface) => {
        this.os = next["Operating system"];
        this.checkLoading();
      },
      error: (err: Error) => {
        this.err = err;
      },
    });
  }

  updateProtocol() {
    return this.http.get<ProtocolInterface>(TYPE).subscribe({
      next: (next: ProtocolInterface) => {
        this.protocol = next["Protocol type"];
        this.checkLoading();
      },
      error: (err: Error) => {
        this.err = err;
      },
    });
  }

  checkLoading() {
    if (this.os && this.protocol && !this.err) {
      this.coreLoading.next(false);
    }
  }

  checkError() {
    return !!this.err;
  }

  updateCore() {
    this.os = null;
    this.protocol = null;
    this.err = null;
    this.checkLoading();
    this.updateOs();
    this.updateProtocol();
  }
}

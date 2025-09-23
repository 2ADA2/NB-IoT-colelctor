import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OS, TYPE } from '../core/consts/requests';
import { OSInterface, ProtocolInterface } from '../core/interfaces/core';

@Injectable({
  providedIn: 'root',
})
export class Core {
  private http: HttpClient = inject(HttpClient);
  private err: Error | null = null;
  private os: "win" | "linux" | null = null;
  private protocol: "mqtt" | "sub" | null = null;

  constructor() {
    this.updateOs();
    this.updateProtocol();
  }

  updateOs() {
    this.http.get<OSInterface>(OS).subscribe({
      next: (next: OSInterface) => {
        this.os = next["Operating system"];
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
      },
      error: (err: Error) => {
        this.err = err;
      },
    });
  }

  getProtocol() {
    return this.protocol;
  }

  getOs() {
    return this.os;
  }

  isLoading() {
    return this.os && this.protocol && !this.err;
  }

  isError() {
    return !!this.err;
  }
}

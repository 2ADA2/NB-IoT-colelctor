import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OS, TYPE } from '../core/consts/requests';
import { OSInterface, ProtocolInterface } from '../core/interfaces/core';

@Injectable({
    providedIn: 'root',
})
export class Core {
    private http: HttpClient = inject(HttpClient);
    private isBackendActivated = false;
    private err:Error|null = null;
    private os: "win" | "linux" | null = null;
    private protocol: "mqtt" | "sub" | null = null;

    constructor() {
        this.http.get<OSInterface>(OS).subscribe({
            next: (next:OSInterface) => {
                this.isBackendActivated = true;
                console.log(next);
            },
            error: (err: Error) => {
                this.isBackendActivated = false;
                this.err = err;
            },
        });
        this.http.get<ProtocolInterface>(TYPE).subscribe({
            next: (next:ProtocolInterface) => {
                this.isBackendActivated = true;
                console.log(next);
            },
            error: (err: Error) => {
                this.isBackendActivated = false;
                this.err = err;
            },
        });
    }

    isLoading() {
        return this.os && this.protocol && this.isBackendActivated;
    }

    isError() {
        return !!this.err;
    }
}

import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SEND_COMMAND, UPDATE_COMMAND_STATUS } from '../../core/requests/mqtt';
import { SourceService } from './source-service';
import { DEV_COMMANDS_STATUS_RU, DevCommandKeys } from '../../core/localization/ru/dev-commands-ru';
import { catchError, tap } from 'rxjs/operators';
import { InfoType, StandardFinalResponseInterface, StandardResponseInterface } from '../../core/interfaces/commands';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevCommandsService {
  private http = inject(HttpClient);
  private sourceService = inject(SourceService);

  private currentCommand: WritableSignal<null | DevCommandKeys> = signal(null);
  private currentStatus: WritableSignal<null | string> = signal(null);
  private inProgress: WritableSignal<boolean> = signal(false);
  private id: string | null = this.sourceService.getId();
  public response: WritableSignal<unknown> = signal(null);
  public lastID: WritableSignal<string | null> = signal(null);


  public getStatus() {
    return {
      command: this.currentCommand,
      status: this.currentStatus,
      inProgress: this.inProgress,
    };
  }

  public sendCommand(command: DevCommandKeys, body: object): void {
    if (this.inProgress()) {
      return;
    }
    this.currentStatus.set(DEV_COMMANDS_STATUS_RU.PENDING);
    this.inProgress.set(true);
    this.currentCommand.set(command);
    this.lastID.set(this.id);

    this.http.post<StandardResponseInterface | StandardFinalResponseInterface>(SEND_COMMAND + this.id, body)
      .pipe(tap((res) => {
          if ("Info" in res) {
            this.currentStatus.set(DEV_COMMANDS_STATUS_RU[res.Info]);
          } else {
            this.inProgress.set(false);
            this.response.set(res.USER_CMD_RESP);
          }
        }),
        catchError(() => {
          this.inProgress.set(false);
          this.currentStatus.set(DEV_COMMANDS_STATUS_RU.err);
          return of(null);
        })).subscribe();

    const interval = setInterval(() => {
      if (!this.inProgress()) {
        clearInterval(interval);
        return;
      }
      this.updateStatus().subscribe();
    }, 5000);
  }

  public stopCommand() {
    this.inProgress.set(false);
    this.currentStatus.set(DEV_COMMANDS_STATUS_RU.dropped);
  }

  private updateStatus() {
    return this.http.get<StandardResponseInterface | StandardFinalResponseInterface>(UPDATE_COMMAND_STATUS + this.id)
      .pipe(tap((res) => {
          if ("Info" in res) {
            const info: InfoType = res.Info;
            this.currentStatus.set(DEV_COMMANDS_STATUS_RU[info]);
          } else {
            const resp = res.USER_CMD_RESP;
            if ("state" in resp && resp.state === "run") {
              return;
            }
            this.currentStatus.set(DEV_COMMANDS_STATUS_RU.OK);
            this.inProgress.set(false);
            this.response.set(resp);
          }
        },
        catchError(() => {
          this.inProgress.set(false);
          return of(null);
        })));
  }
}

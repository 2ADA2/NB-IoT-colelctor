import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DevCommandsService {
  private http = inject(HttpClient);

  private currentCommand: string | null = null;
  private currentStatus: string | null = null;
  private inProgress = false;

  public getStatus() {
    return {
      command: this.currentCommand,
      status: this.currentStatus,
      inProgress: this.inProgress,
    };
  }

  public sendCommand(command: string): null | 1 {
    if (this.inProgress) {
      return null;
    }
    this.inProgress = true;
    this.currentCommand = command;
    this.currentStatus = "pending";
    return 1;
  };

}

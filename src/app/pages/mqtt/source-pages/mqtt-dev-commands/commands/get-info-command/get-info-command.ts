import { Component, inject } from '@angular/core';
import { DevCommandsService } from '../../../../../../services/mqtt/dev-commands-service';

@Component({
  selector: 'app-get-info-command',
  imports: [],
  templateUrl: './get-info-command.html',
  styleUrl: './get-info-command.scss',
})
export class GetInfoCommand {
  private devCommandsService = inject(DevCommandsService);

  public getInfo() {
    this.devCommandsService.sendCommand("GET_INFO", {
        "USER_CMD": "GET_EXT_INFO",
      },
    );
  }
}

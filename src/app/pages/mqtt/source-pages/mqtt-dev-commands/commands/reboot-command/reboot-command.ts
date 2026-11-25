import { Component, inject } from '@angular/core';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';
import { DevCommandsService } from '../../../../../../services/mqtt/dev-commands-service';

@Component({
  selector: 'app-reboot-command',
  imports: [],
  templateUrl: './reboot-command.html',
  styleUrl: './reboot-command.scss',
})
export class RebootCommand {
  private devCommandsService = inject(DevCommandsService);

  public reboot() {
    this.devCommandsService.sendCommand("REBOOT", {
        "USER_CMD": "DEV_REBOOT",
      },
    );
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

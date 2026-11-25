import { Component, inject } from '@angular/core';
import { DevCommandsService } from '../../../../../../services/mqtt/dev-commands-service';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';

@Component({
  selector: 'app-debug-command',
  imports: [],
  templateUrl: './debug-command.html',
  styleUrl: './debug-command.scss',
})
export class DebugCommand {
  private devCommandsService = inject(DevCommandsService);

  public debug() {
    this.devCommandsService.sendCommand("DEBUG", {
        "USER_CMD": "DEBUG_ON",
      },
    );
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

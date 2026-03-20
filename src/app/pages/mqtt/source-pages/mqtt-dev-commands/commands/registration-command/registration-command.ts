import { Component, inject } from '@angular/core';
import { DEV_COMMANDS_RU } from "../../../../../../core/localization/ru/dev-commands-ru";
import { DevCommandsService } from '../../../../../../services/mqtt/dev-commands-service';

@Component({
  selector: 'app-registration-command',
  imports: [],
  templateUrl: './registration-command.html',
  styleUrl: './registration-command.scss',
})
export class RegistrationCommand {
  private devCommandsService = inject(DevCommandsService);

  public register() {
    this.devCommandsService.sendCommand("REGISTRATION", {
        "USER_CMD": "REGISTRATION",
        "USER_ARG": {
          "REG_ID": 123456,
        },
      },
    );
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

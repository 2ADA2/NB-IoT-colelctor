import { Component, inject } from '@angular/core';
import { DevCommandsService } from '../../../../../../services/mqtt/dev-commands-service';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';

@Component({
  selector: 'app-get-sensor-command',
  imports: [],
  templateUrl: './get-sensor-command.html',
  styleUrl: './get-sensor-command.scss',
})
export class GetSensorCommand {
  private devCommandsService = inject(DevCommandsService);

  public getSensor() {
    this.devCommandsService.sendCommand("GET_SENSOR", {
        "USER_CMD": "GET_SENSOR",
      },
    );
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

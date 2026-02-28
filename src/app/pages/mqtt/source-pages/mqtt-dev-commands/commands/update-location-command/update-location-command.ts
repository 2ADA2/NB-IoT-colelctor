import { Component, inject } from '@angular/core';
import { DevCommandsService } from '../../../../../../services/mqtt/dev-commands-service';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';

@Component({
  selector: 'app-update-location-command',
  imports: [],
  templateUrl: './update-location-command.html',
  styleUrl: './update-location-command.scss',
})
export class UpdateLocationCommand {
  private devCommandsService = inject(DevCommandsService);

  public updateLocation() {
    this.devCommandsService.sendCommand("UPDATE_LOCATION", {
        "USER_CMD": "UPD_LOCATION",
      },
    );
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

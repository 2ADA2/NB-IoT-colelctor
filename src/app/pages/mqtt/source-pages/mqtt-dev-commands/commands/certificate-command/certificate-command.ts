import { Component, inject } from '@angular/core';
import { DevCommandsService } from '../../../../../../services/mqtt/dev-commands-service';
import { DEV_COMMANDS_RU } from '../../../../../../core/localization/ru/dev-commands-ru';

@Component({
  selector: 'app-certificate-command',
  imports: [],
  templateUrl: './certificate-command.html',
  styleUrl: './certificate-command.scss',
})
export class CertificateCommand {
  private devCommandsService = inject(DevCommandsService);

  public certificateCommand() {
    this.devCommandsService.sendCommand("CERTIFICATE", {
        "USER_CMD": "FTP_СERT_UPD",
      },
    );
  }

  protected readonly DEV_COMMANDS_RU = DEV_COMMANDS_RU;
}

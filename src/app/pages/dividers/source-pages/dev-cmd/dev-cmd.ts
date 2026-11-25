import { Component, inject } from '@angular/core';
import { Core } from '../../../../services/common/core';
import { SubDevCommands } from '../../../sub/source-pages/sub-dev-commands/sub-dev-commands';
import { MqttDevCommands } from '../../../mqtt/source-pages/mqtt-dev-commands/mqtt-dev-commands';

@Component({
  selector: 'app-dev-cmd',
  imports: [
    SubDevCommands,
    MqttDevCommands,
  ],
  templateUrl: './dev-cmd.html',
  styleUrl: './dev-cmd.scss',
})
export class DevCmd {
  private core = inject(Core);

  public protocol = this.core.getInfo().protocol;
}

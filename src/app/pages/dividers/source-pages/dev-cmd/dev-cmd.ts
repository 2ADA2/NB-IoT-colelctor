import { Component, inject } from '@angular/core';
import { MqttDevInfo } from "../../../mqtt/source-pages/mqtt-dev-info/mqtt-dev-info";
import { SubDevInfo } from "../../../sub/source-pages/sub-dev-info/sub-dev-info";
import { Core } from '../../../../services/common/core';
import { MqttDevSettings } from '../../../mqtt/source-pages/mqtt-dev-settings/mqtt-dev-settings';
import { SubDevCommands } from '../../../sub/source-pages/sub-dev-commands/sub-dev-commands';
import { MqttDevCommands } from '../../../mqtt/source-pages/mqtt-dev-commands/mqtt-dev-commands';

@Component({
  selector: 'app-dev-cmd',
  imports: [
    MqttDevInfo,
    SubDevInfo,
    MqttDevSettings,
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

import { Component, inject } from '@angular/core';
import { Core } from '../../../../services/common/core';
import { MqttDevSettings } from '../../../mqtt/source-pages/mqtt-dev-settings/mqtt-dev-settings';
import { SubDevSettings } from '../../../sub/source-pages/sub-dev-settings/sub-dev-settings';

@Component({
  selector: 'app-dev-settings',
  imports: [
    MqttDevSettings,
    SubDevSettings,
  ],
  templateUrl: './dev-settings.html',
  styleUrl: './dev-settings.scss',
})
export class DevSettings {
  private core = inject(Core);

  public protocol = this.core.getInfo().protocol;
}

import { Component, inject } from '@angular/core';
import { Core } from '../../../../services/common/core';
import { SubDevInfo } from '../../../sub/source-pages/sub-dev-info/sub-dev-info';
import { MqttDevInfo } from '../../../mqtt/source-pages/mqtt-dev-info/mqtt-dev-info';

@Component({
  selector: 'app-dev-info',
  imports: [
    SubDevInfo,
    MqttDevInfo,
  ],
  templateUrl: './dev-info.html',
  styleUrl: './dev-info.scss',
  standalone: true,
})
export class DevInfo {
  private core = inject(Core);

  public protocol = this.core.getInfo().protocol;
}

import { Component, inject } from '@angular/core';
import { Core } from '../../../services/common/core';
import { SubSources } from '../../sub/sub-sources/sub-sources';
import { MqttSources } from '../../mqtt/mqtt-sources/mqtt-sources';

@Component({
  selector: 'app-sources',
  imports: [
    SubSources,
    MqttSources,
  ],
  templateUrl: './sources.html',
  styleUrl: './sources.scss',
  standalone: true,
})
export class Sources {
  private core = inject(Core);

  public protocol = this.core.getInfo().protocol;
}

import { Component } from '@angular/core';
import { HOME_RU } from "../../../../core/localization/ru/home-ru";

@Component({
  selector: 'app-mqtt-dev-info',
  templateUrl: './mqtt-dev-info.html',
  styleUrl: './mqtt-dev-info.scss',
  standalone: true,
})
export class MqttDevInfo {

  protected readonly HOME_RU = HOME_RU;
}

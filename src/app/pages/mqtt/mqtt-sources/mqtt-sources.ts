import { Component } from '@angular/core';
import { BlockHead } from "../../components/block-head/block-head";
import { Body } from "../../components/body/body";

@Component({
  selector: 'app-mqtt-sources',
    imports: [
        BlockHead,
        Body,
    ],
  templateUrl: './mqtt-sources.html',
  styleUrl: './mqtt-sources.scss',
})
export class MqttSources {

}

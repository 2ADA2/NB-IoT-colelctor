import { Component } from '@angular/core';
import { BlockHead } from '../../../components/block-head/block-head';
import { Body } from '../../../components/body/body';

@Component({
  selector: 'app-dev-info',
  imports: [
    BlockHead,
    Body,
  ],
  templateUrl: './dev-info.html',
  styleUrl: './dev-info.scss',
  standalone: true,
})
export class DevInfo {

}

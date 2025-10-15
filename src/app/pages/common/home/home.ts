import { Component } from '@angular/core';
import { BlockHead } from '../../components/block-head/block-head';
import { Body } from '../../components/body/body';
import { HOME_RU } from '../../../core/localization/ru/home-ru';
import { HomeInfo } from './home-components/home-info/home-info';
import { HomeConsole } from './home-components/home-console/home-console';

@Component({
  selector: 'app-home',
  imports: [
    BlockHead,
    Body,
    HomeInfo,
    HomeConsole,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly HOME_RU = HOME_RU;

  public pageNum = 1;

  public setNum(num:number) {
    this.pageNum = num;
  }
}

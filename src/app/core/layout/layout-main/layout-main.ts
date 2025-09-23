import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Navigation } from '../components/navigation/navigation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  imports: [
    Header,
    Navigation,
    RouterOutlet,
  ],
  templateUrl: './layout-main.html',
  styleUrl: './layout-main.scss',
})
export class LayoutMain {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-layout-lite',
  imports: [
    RouterOutlet,
    Header,
  ],
  templateUrl: './layout-lite.html',
  styleUrl: './layout-lite.scss',
})
export class LayoutLite {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { MessageContainer } from '../components/message-container/message-container';

@Component({
  selector: 'app-layout-lite',
  imports: [
    RouterOutlet,
    Header,
    MessageContainer,
  ],
  templateUrl: './layout-lite.html',
  styleUrl: './layout-lite.scss',
})
export class LayoutLite {

}

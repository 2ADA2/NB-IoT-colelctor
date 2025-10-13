import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
})
export class Header {
  ver: string = environment.VERSION;
}

import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
})
export class Header {
  ver: string = environment.VERSION;
}

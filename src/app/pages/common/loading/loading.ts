import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
  standalone: true,
})
export class Loading {

}

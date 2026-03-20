import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  imports: [],
  templateUrl: './loading-component.html',
  styleUrl: './loading-component.scss',
})
export class LoadingComponent implements OnInit, OnDestroy {
  public points = "";
  private interval: number | null = null;

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.points === "...") {
        this.points = "";
      } else {
        this.points = this.points + ".";
      }
    }, 500);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

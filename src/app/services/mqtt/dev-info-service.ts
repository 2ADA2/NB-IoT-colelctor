import { inject, Injectable, OnInit } from '@angular/core';
import { SourceService } from './source-service';

@Injectable({
  providedIn: 'root',
})
export class DevInfoService {
  private sourceService = inject(SourceService);

  public id:string|null = this.sourceService.getId();

  public updateId() {
    this.id = this.sourceService.getId();
  }
}

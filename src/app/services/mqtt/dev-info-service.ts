import { inject, Injectable } from '@angular/core';
import { SourceService } from './source-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DevInfoService {
  // future service
  private sourceService = inject(SourceService);
  private http: HttpClient = inject(HttpClient);

  public id: string | null = this.sourceService.getId();

  public updateId() {
    this.id = this.sourceService.getId();
  }
}

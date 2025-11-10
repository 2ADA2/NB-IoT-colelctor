import { inject, Injectable } from '@angular/core';
import { SourceService } from './source-service';
import { HttpClient } from '@angular/common/http';
import { D_INFO_GET } from '../../core/requests/mqtt';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DevInfoService {
  private sourceService = inject(SourceService);
  private http: HttpClient = inject(HttpClient);

  public updateInfo() {
    return this.http.get(D_INFO_GET).pipe(tap(info => {
      console.log(info);
    }));
  }





  public id:string|null = this.sourceService.getId();

  public updateId() {
    this.id = this.sourceService.getId();
  }


}

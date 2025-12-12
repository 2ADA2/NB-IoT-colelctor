import { inject, Injectable } from '@angular/core';
import {
  DevCredentialsInterface,
  DevFormInterface,
  ImitDataInterface, MeasFulfilledInterface, MeasInfoInterface,
  MeasTargetInterface,
} from '../core/interfaces/device';
import { HttpClient } from '@angular/common/http';
import { SourceService } from './mqtt/source-service';
import { MEASURE_GET, MEASURE_POST } from '../core/requests/mqtt';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private http = inject(HttpClient);
  private sourceService = inject(SourceService);

  private imitData: null | ImitDataInterface = null;

  public updateImitData(data: ImitDataInterface) {
    this.imitData = data;
  };

  private createMeasure(data: DevFormInterface, credentials: DevCredentialsInterface) {
    const date = data.date.toDate().toLocaleDateString();
    const time = data.time.toDate().toLocaleTimeString();
    const totalDate = date.replaceAll(".", "-") + "T" + time;

    return {
      "MeasSchedule": {
        "Tmeas": data.interval,
        "Trepeat": data.intervalTime,
        "Tstart": totalDate,
        "MeasType": data.mode,
        "FIRmode": data.filter,
      },
      "MeasComment": {
        "Titel": credentials.title,
        "Comment": credentials.comment,
        "Artist": credentials.author,
      },
    };
  }

  private createImitData() {
    if (this.imitData) {
      const data = this.imitData;
      return {
        "Nois": data.noise,
        "Sig1": [
          data.ampA,
          data.freqA,
          data.phaseA,
        ],
        "Sig2": [
          data.ampB,
          data.freqB,
          data.phaseB,
        ],
        "Sig3": [
          data.ampC,
          data.freqC,
          data.phaseC,
        ],
      };
    }
    return null;
  }

  public sendReal(data: DevFormInterface, credentials: DevCredentialsInterface) {
    const meas = this.createMeasure(data, credentials);
    return this.http.post(MEASURE_POST + this.sourceService.getId(), meas);
  }

  public sendImit(data: DevFormInterface, credentials: DevCredentialsInterface) {
    const meas = this.createMeasure(data, credentials);
    const imitData = this.createImitData();
    if (imitData) {
      return this.http.post(MEASURE_POST + this.sourceService.getId(), {
        "MeasSchedule": {
          "Tmeas": meas.MeasSchedule.Tmeas,
          "Trepeat": meas.MeasSchedule.Trepeat,
          "Tstart": meas.MeasSchedule.Tstart,
          "MeasType": meas.MeasSchedule.MeasType,
          "FIRmode": meas.MeasSchedule.FIRmode,
          "Nois": imitData.Nois,
          "Sig1": imitData.Sig1,
          "Sig2": imitData.Sig2,
          "Sig3": imitData.Sig3,
        },
        "MeasComment": meas.MeasComment,
      });
    }
    return;
  }

  private updateMeasure(type: "target"): Observable<MeasTargetInterface>;
  private updateMeasure(type: "fulfilled"): Observable<MeasFulfilledInterface>;
  private updateMeasure(type: string) {
    return this.http.post<MeasTargetInterface|MeasFulfilledInterface>(MEASURE_GET + this.sourceService.getId(), {
      MeasList: type,
    });
  }

  public updateTarget(): Observable<MeasTargetInterface> {
    return this.updateMeasure("target");
  }

  public updateFulfilled(): Observable<MeasFulfilledInterface> {
    return this.updateMeasure("fulfilled");
  }
}




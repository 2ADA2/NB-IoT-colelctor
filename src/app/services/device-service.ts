import { inject, Injectable } from '@angular/core';
import { DevCredentialsInterface, DevFormInterface, ImitDataInterface } from '../core/interfaces/device';
import { HttpClient } from '@angular/common/http';
import { SourceService } from './mqtt/source-service';
import { MEASURE_POST } from '../core/requests/mqtt';


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
}




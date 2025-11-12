import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import {
  ConnectionStateInterface, DBStateInterface,
  DeviceInfoInterface,
  DevInfoListInterface,
  FormattedSourcesInterface,
} from '../../core/interfaces/sources';
import { HttpClient } from '@angular/common/http';
import { DB_GET, SOURCES_GET, STATUS_GET, STATUS_SET } from '../../core/requests/mqtt';
import { tap } from 'rxjs/operators';
import { MessageService } from '../common/message-service';
import { SOURCES_ERRORS_RU } from '../../core/localization/ru/sources-ru';

@Injectable({
  providedIn: 'root',
})
export class SourceService {
  private http = inject(HttpClient);
  private messageService = inject(MessageService);

  // connection state block
  public connectionState: WritableSignal<0 | 1 | 2> = signal(2); // 2 - loading  1 - connected  0 - no

  public setState() {
    if (this.connectionState() === 2) {
      this.messageService.createError(SOURCES_ERRORS_RU.ERROR, SOURCES_ERRORS_RU.ERROR_MESSAGE);
      return;
    }
    this.http.post(STATUS_SET, {
      MQTT_connect: !this.connectionState(),
    }, {
      responseType: "text" as const,
    }).pipe(tap((res: unknown) => {
      if (res === "200 OK") {
        this.getState().subscribe();
      }
    })).subscribe();
    this.connectionState.set(2);
  }

  public getState() {
    return this.http.get<ConnectionStateInterface>(STATUS_GET,
    ).pipe(tap((res: ConnectionStateInterface) => {
      this.connectionState.set(res.ConnectionState ? 1 : 0);
    }));
  }

  // sources block
  public sources: DeviceInfoInterface[] = [];
  public formattedSources: WritableSignal<FormattedSourcesInterface[]> = signal([]);

  public updateSources() {
    return this.http.get<DevInfoListInterface>(SOURCES_GET,
    ).pipe(tap((res: DevInfoListInterface) => {
      this.sources = res.DevinfoList;
      this.formattedSources.set(this.formatSources(res.DevinfoList));
    }));
  }

  private formatSources(devInfo: DeviceInfoInterface[]) {
    let formatted: FormattedSourcesInterface[] = [];
    devInfo.forEach((e: DeviceInfoInterface) => {
      formatted.push({
        id: e.Device.DevId,
        time: e.DeviceAttr.localTime,
        battery: e.DeviceAttr.Metrics.Battery,
        signal: e.DeviceAttr.Metrics["GSM siglevel"],
        temperature: e.DeviceAttr.Metrics.Temperature,
        online: e.DeviceAttr.Metrics.Online,
      });
    });

    formatted = formatted.sort((a, b) => {
      const aid = Number(a.id.split(":").join(""));
      const bid = Number(b.id.split(":").join(""));
      return aid > bid ? 1 : -1;
    });

    return formatted;
  }

  // current device block
  private id: string | null = null;
  private dbstate:WritableSignal<boolean> = signal(false);

  public setId(id: string | null) {
    const oldId = this.id;
    this.id = id;
    if (id && id !== oldId) {
      this.updateDBState(id).pipe(tap((res:DBStateInterface) => {
        this.dbstate.set(res.PutDBState);
      })).subscribe();
    }
  }

  public getDeviceById(id: string) {
    return this.sources.find(e => e.Device.DevId === id);
  }

  public getId() {
    return this.id;
  }

  public getDBState() {
    return this.dbstate();
  }

  public updateDBState(id: string) {
    return this.http.get<DBStateInterface>(DB_GET + id);
  }

  public setDBState(state: boolean) {
    this.dbstate.set(state);
  }

  // Status but mask parse
  public getErrors = (bitVector:string) => {
    const errors = [];
    for (let i = 0; i < 16; i++) {
      if (bitVector && (1 << i)) {
        errors.push(i);
      }
    }
    return errors;
  };
}

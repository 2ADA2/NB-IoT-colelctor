import { Component, effect, inject, Injector, runInInjectionContext, OnInit } from '@angular/core';
import { BlockHead } from "../../components/block-head/block-head";
import { Body } from "../../components/body/body";
import { Table } from '../../components/table/table';
import { SourceService } from '../../../services/mqtt/source-service';
import { SOURCES_RU } from '../../../core/localization/ru/sources-ru';

@Component({
  selector: 'app-mqtt-sources',
  imports: [
    BlockHead,
    Body,
    Table,
  ],
  templateUrl: './mqtt-sources.html',
  styleUrl: './mqtt-sources.scss',
  standalone: true,
})
export class MqttSources implements OnInit {
  private injector: Injector = inject(Injector);
  private sourceService = inject(SourceService);

  public status: 0 | 1 | 2 = 2; // 2-loading 1-connected 2-no
  public btnText = SOURCES_RU.LOADING;
  public statusText = SOURCES_RU.LOADING;

  public ngOnInit() {
    this.sourceService.getState().subscribe();
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.status = this.sourceService.connectionState();
        switch (this.status) {
          case 0:
            this.btnText = SOURCES_RU.CONNECT;
            this.statusText = SOURCES_RU.DISCONNECTED;
            break;
          case 1:
            this.btnText = SOURCES_RU.DISCONNECT;
            this.statusText = SOURCES_RU.CONNECTED;
            break;
          default:
            this.btnText = SOURCES_RU.LOADING;
            this.statusText = SOURCES_RU.LOADING;
        }
      });
    });
  }

  changeStatus() {
    this.sourceService.setState();
  }

  protected readonly SOURCES_RU = SOURCES_RU;
}

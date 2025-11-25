import { Component, effect, inject, Injector, OnInit, runInInjectionContext, ViewEncapsulation } from '@angular/core';
import { BlockHead } from '../../../components/block-head/block-head';
import { Body } from '../../../components/body/body';
import { SourceService } from '../../../../services/mqtt/source-service';
import {
    DEV_SETTINGS_RU, MEAS_SETTINGS_CREDENTIALS_RU,
    MEAS_SETTINGS_FIR_MODE_RU, MEAS_SETTINGS_MODE_RU,
    MEAS_SETTINGS_RU,
} from '../../../../core/localization/ru/dev-settings-ru';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule,
    MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { CUSTOM_FORMATS } from '../../../../core/consts/angular-material-formats';
import {
    MatTimepicker,
    MatTimepickerInput,
    MatTimepickerModule,
    MatTimepickerToggle,
} from '@angular/material/timepicker';
import { MatOption, MatSelect } from '@angular/material/select';
import moment from 'moment';
import { Table } from './components/table/table';
import { Header } from "../../../../core/layout/components/header/header";

@Component({
    selector: 'app-mqtt-dev-settings',
    imports: [
        BlockHead,
        Body,
        MatFormField,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatInput,
        MatDatepicker,
        MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatMomentDateModule, ReactiveFormsModule, MatTimepickerInput,
        MatTimepicker, MatTimepickerToggle, MatTimepickerModule, MatOption, MatSelect, Table, Header,
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [
        provideMomentDateAdapter(CUSTOM_FORMATS),
    ],
    templateUrl: './mqtt-dev-settings.html',
    styleUrl: './mqtt-dev-settings.scss',
})
export class MqttDevSettings implements OnInit {
    private injector: Injector = inject(Injector);
    private sourceService = inject(SourceService);

    public id: string | null = null;

    public formGroup: FormGroup = new FormGroup({
        time: new FormControl(moment()),
        date: new FormControl(moment()),
        interval: new FormControl(0),
        intervalTime: new FormControl(0),
        mode: new FormControl(1),
        filter: new FormControl(0),
    });

    public formCredentials: FormGroup = new FormGroup({
        author: new FormControl(""),
        title: new FormControl(""),
        comment: new FormControl(""),
    });

    public ngOnInit() {
        runInInjectionContext(this.injector, () => {
            effect(() => {
                this.id = this.sourceService.getId();
            });
        });
    }

    public validForm() {
        const interval = this.formGroup.value.interval || 0;
        const intervalTime = this.formGroup.value.intervalTime || 0;
        this.formGroup.patchValue({
            interval,
            intervalTime,
        });
    }

    public send() {
        console.log(this.formGroup.value);
    }

    public reset() {
        this.formCredentials.reset();
    }


    protected readonly DEV_SETTINGS_RU = DEV_SETTINGS_RU;
    protected readonly MEAS_SETTINGS_RU = MEAS_SETTINGS_RU;
    protected readonly MEAS_SETTINGS_FIR_MODE_RU = MEAS_SETTINGS_FIR_MODE_RU;
    protected readonly MEAS_SETTINGS_MODE_RU = MEAS_SETTINGS_MODE_RU;
    protected readonly MEAS_SETTINGS_CREDENTIALS_RU = MEAS_SETTINGS_CREDENTIALS_RU;
}

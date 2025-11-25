import { Component } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IMIT_SETTINGS_RU } from "../../../../../../core/localization/ru/dev-settings-ru";

@Component({
    selector: 'app-table',
    imports: [
        MatFormField,
        MatInput,
        ReactiveFormsModule,
    ],
    templateUrl: './table.html',
    styleUrl: './table.scss',
})
export class Table {
    public imitGroup = new FormGroup({
        ampA: new FormControl(0),
        ampB: new FormControl(0),
        ampC: new FormControl(0),
        freqA: new FormControl(0),
        freqB: new FormControl(0),
        freqC: new FormControl(0),
        phaseA: new FormControl(0),
        phaseB: new FormControl(0),
        phaseC: new FormControl(0),
    });

    public validTable() {
        const val = this.imitGroup.value;
        this.imitGroup.patchValue({
            ampA: Number(val.ampA),
            ampB: Number(val.ampB),
            ampC: Number(val.ampC),
            freqA: Number(val.freqA),
            freqB: Number(val.freqB),
            freqC: Number(val.freqC),
            phaseA: Number(val.phaseA),
            phaseB: Number(val.phaseB),
            phaseC: Number(val.phaseC),
        });
    }

    protected readonly IMIT_SETTINGS_RU = IMIT_SETTINGS_RU;
}

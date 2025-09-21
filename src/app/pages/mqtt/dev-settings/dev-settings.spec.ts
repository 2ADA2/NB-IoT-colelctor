import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSettings } from './dev-settings';

describe('DevSettings', () => {
    let component: DevSettings;
    let fixture: ComponentFixture<DevSettings>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DevSettings],
        })
            .compileComponents();

        fixture = TestBed.createComponent(DevSettings);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

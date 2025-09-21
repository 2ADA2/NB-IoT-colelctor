import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionBlock } from './connection-block';

describe('ConnectionBlock', () => {
    let component: ConnectionBlock;
    let fixture: ComponentFixture<ConnectionBlock>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConnectionBlock],
        })
            .compileComponents();

        fixture = TestBed.createComponent(ConnectionBlock);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

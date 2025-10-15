import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSettings } from './advanced-settings';

describe('AdvancedSettings', () => {
  let component: AdvancedSettings;
  let fixture: ComponentFixture<AdvancedSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedSettings],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdvancedSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

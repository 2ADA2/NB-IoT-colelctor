import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDevSettings } from './sub-dev-settings';

describe('SubDevSettings', () => {
  let component: SubDevSettings;
  let fixture: ComponentFixture<SubDevSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubDevSettings],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubDevSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

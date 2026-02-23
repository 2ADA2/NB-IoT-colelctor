import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSensorCommand } from './set-sensor-command';

describe('SetSensorCommand', () => {
  let component: SetSensorCommand;
  let fixture: ComponentFixture<SetSensorCommand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetSensorCommand],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SetSensorCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
